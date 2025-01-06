import path from "path";
import fs from "fs";
import { DBFFile } from "dbffile";
import dotenv from "dotenv";
import colors from "colors";
import cliProgress from "cli-progress";
import mongoose from "mongoose";
import { pathToFileURL } from "url";

// ===========================================
// 1. Fonctions utilitaires pour renommer les champs en double
// ===========================================
/**
 * Renomme en mémoire les champs dupliqués dans le buffer DBF.
 * @param {Buffer} buffer Le contenu binaire du fichier DBF.
 * @returns {Buffer} Le buffer modifié, avec les champs en double renommés.
 */
function renameDuplicateFields(buffer) {
  // Lecture des infos d'en-tête
  // Byte 8-9 : taille de l'en-tête (headerLength)
  const headerLength = buffer.readUInt16LE(8); // offset 8 sur 2 octets

  // La zone des descripteurs de champs commence à l'octet 32,
  // chaque descripteur fait 32 octets, on continue jusqu'à tomber sur 0x0D.
  let offset = 32;
  const fields = [];

  while (true) {
    // 0x0D = fin de la liste de champs
    if (buffer[offset] === 0x0D) break;

    // On prend 32 octets décrivant un champ
    const fieldDescriptor = buffer.slice(offset, offset + 32);

    // Les 11 premiers octets : nom du champ (padded de 0x00 si < 11 chars)
    let fieldName = fieldDescriptor.toString("ascii", 0, 11);
    fieldName = fieldName.replace(/\x00/g, ""); // Enlever les caractères null
    fieldName = fieldName.trim();               // Enlever les espaces

    fields.push({
      fieldName,
      offset, // position du début du field descriptor, pour réécrire ensuite
    });

    offset += 32;
  }

  // Renommer les champs en double
  const seenNames = {};
  for (const field of fields) {
    const originalName = field.fieldName;
    if (!seenNames[originalName]) {
      seenNames[originalName] = 0;
    }
    seenNames[originalName]++;

    // S'il est déjà apparu, on le renomme
    if (seenNames[originalName] > 1) {
      const newName = `${originalName}_${seenNames[originalName]}`;
      // Les noms DBF ne peuvent pas dépasser 10 caractères
      const truncated = newName.slice(0, 10);

      // Prépare un buffer de 11 octets (10 chars max + 1 null byte)
      const newNameBuf = Buffer.alloc(11, 0x00);
      newNameBuf.write(truncated, 0, "ascii");

      // On écrase la zone [offset, offset+11] (pour le descriptor) dans le buffer principal
      newNameBuf.copy(buffer, field.offset, 0, 11);
    }
  }

  return buffer;
}

/**
 * Ouvrir un fichier DBF en évitant l'erreur "Duplicate field name"
 * en créant un fichier temporaire dont on aura renommé les champs en double.
 * @param {string} filePath Chemin du fichier DBF d'origine
 * @returns {Promise<DBFFile>} Une instance DBFFile (déjà ouverte)
 */
async function openDbfWithRenamedFields(filePath) {
  // Lire le DBF dans un buffer
  const originalBuffer = fs.readFileSync(filePath);

  // Renommer les champs dupliqués dans un buffer patché
  const patchedBuffer = renameDuplicateFields(originalBuffer);

  // Sauvegarder dans un fichier temporaire
  const tempFilePath = filePath.replace(/\.dbf$/i, ".temp.dbf");
  fs.writeFileSync(tempFilePath, patchedBuffer);

  // Ouvrir ce fichier temporaire avec DBFFile
  return await DBFFile.open(tempFilePath);
}

// ===========================================
// 2. Configuration de l'environnement
// ===========================================
dotenv.config({ path: path.resolve("config/config.env") });

const mongoUri = process.env.MONGO_URI || process.env.MONGO_URI_DEV;

if (!mongoUri) {
  console.error(colors.red("❌ MONGO_URI non défini dans config/config.env."));
  process.exit(1);
}

const ERROR_LOG_FILE = "./error.log";

// ===========================================
// 3. Fonctions utilitaires
// ===========================================
const logError = (message) => {
  fs.appendFileSync(ERROR_LOG_FILE, `${new Date().toISOString()} - ${message}\n`);
};

// Connexion à MongoDB
const connectDB = async () => {
  try {
    console.log(colors.yellow.bold("\n🔌 Connexion à MongoDB..."));
    await mongoose.connect(mongoUri);
    console.log(colors.green.bold("✅ MongoDB connecté avec succès.\n"));
  } catch (err) {
    console.error(colors.red.bold(`❌ Erreur MongoDB : ${err.message}`));
    process.exit(1);
  }
};

// Nettoyage des valeurs NaN + log si champ dupliqué dans le record JS
const sanitizeRecord = (record) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(record)) {
    if (!sanitized.hasOwnProperty(key)) {
      sanitized[key] = typeof value === "number" && isNaN(value) ? 0 : value;
    } else {
      logError(`Duplicate field '${key}' detected and ignored in record.`);
    }
  }
  return sanitized;
};

const startTime = Date.now();
const formatElapsedTime = () => {
  const elapsedMs = Date.now() - startTime;
  const seconds = Math.floor((elapsedMs / 1000) % 60);
  const minutes = Math.floor((elapsedMs / (1000 * 60)) % 60);
  const hours = Math.floor(elapsedMs / (1000 * 60 * 60));
  return `${hours}h ${minutes}m ${seconds}s`;
};

// Chargement dynamique des modèles
const loadModel = async (folder, modelType) => {
  const modelFileName = {
    article: `Article`,
    classnum: `Classnum`,
    fournisseur: `Fournisseur`,
    facture: `Facture`,
    factureDetail: `FactureDetail`,
    tier: `Tier`,
    client: `Client`,
  }[modelType];

  try {
    const modelPath = pathToFileURL(
      path.resolve(`./models/bases/${folder}/${modelFileName}.js`)
    ).href;
    const { default: model } = await import(modelPath);
    return model;
  } catch (err) {
    const errorMsg = `⚠️ Impossible de charger le modèle ${modelFileName}: ${err.message}`;
    console.warn(colors.yellow(errorMsg));
    logError(errorMsg);
    return null;
  }
};

const createProgressBar = (fileName, total) => {
  return new cliProgress.SingleBar(
    {
      format: `${colors.yellow.bold(fileName)} |${colors.blue("{bar}")}| ${colors.green("{value}")}${colors.blue("/{total}")} Enregistrements || {percentage}% || ETA: {eta_formatted}`,
      barCompleteChar: "\u2588",
      barIncompleteChar: "\u2591",
      hideCursor: true,
      etaBuffer: 50,
    },
    cliProgress.Presets.rect
  );
};

// ===========================================
// 4. Fonction pour traiter un fichier DBF
// ===========================================
const processFile = async (filePath, model, fileName, folder) => {
  if (!fs.existsSync(filePath)) {
    const errorMsg = `⚠️ Fichier ${fileName}.dbf manquant dans ${folder}`;
    console.warn(colors.yellow(errorMsg));
    logError(errorMsg);
    return;
  }

  // --- Au lieu de DBFFile.open(filePath), on utilise openDbfWithRenamedFields ---
  let dbf;
  try {
    dbf = await openDbfWithRenamedFields(filePath);
  } catch (error) {
    const errorMsg = `❌ Erreur lors de l'ouverture du DBF '${fileName}.dbf' : ${error.message}`;
    console.error(colors.red(errorMsg));
    logError(errorMsg);
    return;
  }

  console.log(
    colors.cyan.bold(`📄 Lecture de ${fileName}.dbf. ${dbf.recordCount} enregistrements.`)
  );

  console.log(colors.yellow(`🗑️ Suppression des anciennes données pour ${fileName}...`));
  await model.deleteMany();

  const progressBar = createProgressBar(fileName, dbf.recordCount);
  progressBar.start(dbf.recordCount, 0);

  const records = await dbf.readRecords();
  let insertedCount = 0;

  for (const record of records) {
    const sanitizedRecord = sanitizeRecord(record);
    try {
      await model.create(sanitizedRecord);
      insertedCount++;
      progressBar.update(insertedCount);
    } catch (err) {
      if (err.message.includes("Duplicate field name")) {
        logError(`Duplicate field error in ${fileName}: ${err.message}`);
        console.warn(
          colors.yellow(`⚠️ Duplicate field detected and skipped in ${fileName}.`)
        );
      } else {
        const errorMsg = `❌ Erreur d'insertion dans ${fileName}: ${err.message}`;
        console.error(colors.red(errorMsg));
        logError(errorMsg);
      }
    }
  }

  progressBar.stop();
  console.log(
    colors.green.bold(
      `✅ Importation réussie pour ${fileName}. Total inséré : ${colors.green(insertedCount)}${colors.blue("/")}${dbf.recordCount} enregistrements.`
    )
  );
};

// ===========================================
// 5. Fonction principale d'importation
// ===========================================
const importDbfsData = async () => {
  console.time("⏱️ Temps total d'exécution");

  const folders = [
    "AVB",
    "DQ",
    "FMB",
    "HD",
    "KONE",
    "KOUMAC",
    "LD",
    "LE_BROUSSARD",
    "MEARE",
    "PAITA_BRICOLAGE",
    "QC",
    "SITEC",
    "VKP",
  ];
  const DBF_FOLDER = path.resolve("./_dbf");

  try {
    await connectDB();

    for (const folder of folders) {
      const folderPath = path.join(DBF_FOLDER, folder);

      if (!fs.existsSync(folderPath)) {
        const errorMsg = `⚠️ Dossier introuvable : ${folderPath}`;
        console.warn(colors.yellow(errorMsg));
        logError(errorMsg);
        continue;
      }

      console.log(colors.blue.bold(`\n📂 Traitement des fichiers dans le dossier : ${folder}`));

      const models = {
        article: await loadModel(folder, "article"),
        classnum: await loadModel(folder, "classnum"),
        fournisseur: await loadModel(folder, "fournisseur"),
        facture: await loadModel(folder, "facture"),
        factureDetail: await loadModel(folder, "factureDetail"),
        tier: await loadModel(folder, "tier"),
        client: await loadModel(folder, "client"),
      };

      for (const [fileName, model] of Object.entries(models)) {
        if (model) {
          const fileMap = {
            article: "article.dbf",
            classnum: "classes.dbf",
            fournisseur: "fourniss.dbf",
            facture: "facture.dbf",
            factureDetail: "detail.dbf",
            client: "clients.dbf",
            tier: "tiers.dbf",
          };

          const dbfPath = path.join(folderPath, fileMap[fileName]);
          await processFile(dbfPath, model, fileName, folder);
          console.log(colors.cyan(`⏱️ Temps écoulé depuis le lancement : ${formatElapsedTime()}`));
        }
      }
    }

    console.log(colors.green.inverse("🎉 Importation complète pour TOUS les dossiers."));
    console.log(colors.cyan(`⏱️ Temps total écoulé : ${formatElapsedTime()}`));
    console.timeEnd("⏱️ Temps total d'exécution");
  } catch (error) {
    console.error(colors.red.bold(`❌ Erreur critique : ${error.message}`));
    logError(`Erreur critique : ${error.message}`);
  } finally {
    process.exit();
  }
};



// ===========================================
// 6. Lancement de l'import
// ===========================================
importDbfsData();
