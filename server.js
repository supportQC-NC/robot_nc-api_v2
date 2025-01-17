import path from 'path'
import express from "express";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import colors from "colors";
import fileUpload from "express-fileupload";
import errorHandler from "./middleware/error.js"; // Middleware d'erreurs





// Route Files
import auth from './routes/auth.js';
import bootcamps from './routes/bootcamps.js'
import courses from './routes/courses.js'
import compagnies from './routes/compagnies.js'
import reviews from './routes/reviews.js'
import users from './routes/users.js'
import logs from './routes/logs.js'

//AVB
import avbArticles from './routes/articles/avbArticles.js' 
import avbClasses from './routes/classes/avbClasses.js'
import avbFournisseurs from './routes/fournisseurs/avbFournisseurs.js'
import avbClients from './routes/clients/avbClients.js'
import avbFactures from './routes/factures/avbFactures.js'
import avbFactureDetails from './routes/factureDetails/avbFactureDetails.js'
import avbTiers from './routes/tiers/avbTiers.js'
//AW
import awArticles from "./routes/articles/awArticles.js";
import awClasses from './routes/classes/awClasses.js'
import awFournisseurs from './routes/fournisseurs/awFournisseurs.js'
import awClients from './routes/clients/awClients.js'
import awFactures from './routes/factures/awFactures.js'
import awFactureDetails from './routes/factureDetails/awFactureDetails.js'
import awTiers from './routes/tiers/awTiers.js'
//DQ
import dqArticles from './routes/articles/dqArticles.js'
import dqClasses from './routes/classes/dqClasses.js'
import dqClients from './routes/clients/dqClients.js'
import dqFournisseurs from './routes/fournisseurs/dqFournisseurs.js'
import dqFactures from './routes/factures/dqFactures.js'
import dqFactureDetails from './routes/factureDetails/dqFactureDetails.js'
import dqTiers from './routes/tiers/dqTiers.js'
//FMB
import fmbArticles from './routes/articles/fmbArticles.js'
import fmbClasses from './routes/classes/fmbClasses.js'
import fmbClients from './routes/clients/fmbClients.js'
import fmbFournisseurs from './routes/fournisseurs/fmbFournisseurs.js'
import fmbFactures from './routes/factures/fmbFactures.js'
import fmbFactureDetails from './routes/factureDetails/fmbFactureDetails.js'
import fmbTiers from './routes/tiers/fmbTiers.js'
//HD
import hdArticles from './routes/articles/hdArticles.js'
import hdClasses from './routes/classes/hdClasses.js'
import hdClients from './routes/clients/hdClients.js'
import hdFournisseurs from './routes/fournisseurs/hdFournisseurs.js'
import hdFactures from './routes/factures/hdFactures.js'
import hdFactureDetails from './routes/factureDetails/hdFactureDetails.js'
import hdTiers from './routes/tiers/hdTiers.js'
//KONE
import koneArticles from './routes/articles/koneArticles.js'
import koneClasses from './routes/classes/koneClasses.js'
import koneClients from './routes/clients/koneClients.js'
import koneFournisseurs from './routes/fournisseurs/koneFournisseurs.js'
import koneFactures from './routes/factures/koneFactures.js'
import koneFactureDetails from './routes/factureDetails/koneFactureDetails.js'
import koneTiers from './routes/tiers/koneTiers.js'
//KOUMAC
import koumacArticles from './routes/articles/koumacArticles.js'
import koumacClasses from './routes/classes/koumacClasses.js'
import koumacClients from './routes/clients/koumacClients.js'
import koumacFournisseurs from './routes/fournisseurs/koumacFournisseurs.js'
import koumacFactures from './routes/factures/koumacFactures.js'
import koumacFactureDetails from './routes/factureDetails/koneFactureDetails.js'
import koumacTiers from './routes/tiers/koumacTiers.js'

//LD
import ldArticles from './routes/articles/ldArticles.js'
import ldClasses from './routes/classes/ldClasses.js'
import ldClients from './routes/clients/ldClients.js'
import ldFournisseurs from './routes/fournisseurs/ldFournisseurs.js'
import ldFactures from './routes/factures/ldFactures.js'
import ldFactureDetails from './routes/factureDetails/ldFactureDetails.js'
import ldTiers from './routes/tiers/ldTiers.js'

//LEBROUSSARD
import leBroussardArticles from './routes/articles/leBroussardArticles.js'
import leBroussardClasses from './routes/classes/leBroussardClasses.js'
import leBroussardClients from './routes/clients/leBroussardClients.js'
import leBroussardFournisseurs from './routes/fournisseurs/leBroussardFournisseurs.js'
import leBroussardFactures from './routes/factures/leBroussardFactures.js'
import leBroussardFactureDetails from './routes/factureDetails/leBroussardDetails.js'
import leBroussardTiers from './routes/tiers/leBroussardTiers.js'

//MEARE
import meareClasses from './routes/classes/meareClasses.js'
import meareArticles from './routes/articles/meareArticles.js'
import meareClients from './routes/clients/meareClients.js'
import meareFournisseurs from './routes/fournisseurs/meareFournisseurs.js'
import meareFactures from './routes/factures/meareFactures.js'
import meareFactureDetails from './routes/factureDetails/meareFactureDetails.js'
import meareTiers from './routes/tiers/meareTiers.js'

//PAITABRICOLAGE
import paitaBricolageClasses from './routes/classes/paitaBricolage.js'
import paitaBricolageArticles from './routes/articles/paitaBricolage.js'
import paitaBricolageClients from './routes/clients/paitaBricolageClients.js'
import paitaBricolageFournisseurs from './routes/fournisseurs/paitaBricolageFournisseurs.js'
import paitaBricolageFactures from './routes/factures/paitaBricolageFactures.js'
import paitaBricolageFactureDetails from './routes/factureDetails/paitaBricolageDetails.js'
import paitaBricolageTiers from './routes/tiers/paitaBricolageTiers.js'

//QC
import qcClasses from './routes/classes/qcClasses.js'
import qcArticles from './routes/articles/qcArticles.js'
import qcClients from './routes/clients/qcClients.js'
import qcFournisseurs from './routes/fournisseurs/qcFournisseurs.js'
import qcFactures from './routes/factures/qcFactures.js'
import qcFactureDetails from './routes/factureDetails/qcFactureDetails.js'
import qcTiers from './routes/tiers/qcTiers.js'

//SITEC
import sitecClasses from './routes/classes/sitecClasses.js'
import sitecArticles from './routes/articles/sitecArticles.js'
import sitecClients from './routes/clients/sitecClients.js'
import sitecFournisseurs from './routes/fournisseurs/sitecFournisseurs.js'
import sitecFactures from './routes/factures/sitecFactures.js'
import sitecFactureDetails from './routes/factureDetails/sitecFactureDetails.js'
import sitecTiers from './routes/tiers/sitecTiers.js'

//VKP
import vkpClasses from './routes/classes/vkpClasses.js'
import vkpArticles from './routes/articles/vkpArticles.js'
import vkpClients from './routes/clients/vkpClients.js'
import vkpFournisseurs from './routes/fournisseurs/vkpFournisseurs.js'
import vkpFactures from './routes/factures/vkpFactures.js'
import vkpFactureDetails from './routes/factureDetails/vkpFactureDetails.js'
import vkpTiers from './routes/tiers/vkpTiers.js'


// Configuration des variables d'environnement
dotenv.config({ path: './config/config.env' });



const app = express()

// Body parser 
app.use(express.json())


// -- AJOUT DU MIDDLEWARE CORS AVANT TES ROUTES --
app.use(
  cors({
    origin: [
      "http://localhost:3000",  // Dev local
      "http://robot-nc.com" // Domaine en production
    ],
    credentials: true
  })
);




// Connexion à la base de données MongoDB
connectDB();



// Configuration des logs pour le mode développement
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Middleware pour uploader des fichiers
app.use(
  fileUpload({
    createParentPath: true, // Crée les dossiers si nécessaire
    limits: { fileSize: 2 * 1024 * 1024 }, // Limite de taille des fichiers (2 Mo ici)
  })
);



// set static folder 

// Recréer __filename et __dirname pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration du dossier public
app.use(express.static(path.join(__dirname, 'public')));


// Route principale pour tester l'API
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API Robot-NC fonctionne.' });
});




// Mount Routers 

app.use('/api/v2/bootcamps', bootcamps)
app.use('/api/v2/courses', courses)
app.use('/api/v2/auth', auth);
app.use('/api/v2/companies', compagnies)
app.use('/api/v2/reviews', reviews)
app.use('/api/v2/users', users)
app.use('/api/v2/logs', logs)


// AVB ROUTES
app.use('/api/v2/avb/articles', avbArticles)
app.use('/api/v2/avb/classes', avbClasses)
app.use('/api/v2/avb/fournisseurs', avbFournisseurs)
app.use('/api/v2/avb/clients', avbClients)
app.use('/api/v2/avb/factures', avbFactures)
app.use('/api/v2/avb/facture-details', avbFactureDetails)
app.use('/api/v2/avb/tiers', avbTiers)
// AW ROUTES
app.use('/api/v2/aw/articles', awArticles)
app.use('/api/v2/aw/classes', awClasses)
app.use('/api/v2/aw/clients', awClients)
app.use('/api/v2/aw/fournisseurs', awFournisseurs)
app.use('/api/v2/aw/factures', awFactures)
app.use('/api/v2/aw/facture-details', awFactureDetails)
app.use('/api/v2/aw/tiers', awTiers)
// DQ ROUTES
app.use('/api/v2/dq/classes', dqClasses)
app.use('/api/v2/dq/articles', dqArticles)
app.use('/api/v2/dq/clients', dqClients)
app.use('/api/v2/dq/fournisseurs', dqFournisseurs)
app.use('/api/v2/dq/factures', dqFactures)
app.use('/api/v2/dq/facture-details', dqFactureDetails)
app.use('/api/v2/dq/tiers', dqTiers)
// FMB ROUTES
app.use('/api/v2/fmb/classes', fmbClasses)
app.use('/api/v2/fmb/articles', fmbArticles)
app.use('/api/v2/fmb/clients', fmbClients)
app.use('/api/v2/fmb/fournisseurs', fmbFournisseurs)
app.use('/api/v2/fmb/factures', fmbFactures)
app.use('/api/v2/fmb/facture-details', fmbFactureDetails)
app.use('/api/v2/fmb/tiers', fmbTiers)

// HD ROUTES
app.use('/api/v2/hd/classes', hdClasses)
app.use('/api/v2/hd/articles', hdArticles)
app.use('/api/v2/hd/clients', hdClients)
app.use('/api/v2/hd/fournisseurs', hdFournisseurs)
app.use('/api/v2/hd/factures', hdFactures)
app.use('/api/v2/hd/facture-details', hdFactureDetails)
app.use('/api/v2/hd/tiers', hdTiers)

// KONE ROUTES
app.use('/api/v2/kone/classes', koneClasses)
app.use('/api/v2/kone/articles', koneArticles)
app.use('/api/v2/kone/clients', koneClients)
app.use('/api/v2/kone/fournisseurs', koneFournisseurs)
app.use('/api/v2/kone/factures', koneFactures)
app.use('/api/v2/kone/facture-details', koneFactureDetails)
app.use('/api/v2/kone/tiers', koneTiers)

// KOUMAC ROUTES
app.use('/api/v2/koumac/classes', koumacClasses)
app.use('/api/v2/koumac/articles', koumacArticles)
app.use('/api/v2/koumac/clients', koumacClients)
app.use('/api/v2/koumac/fournisseurs', koumacFournisseurs)
app.use('/api/v2/koumac/factures', koumacFactures)
app.use('/api/v2/koumac/facture-details', koumacFactureDetails)
app.use('/api/v2/koumac/tiers', koumacTiers)

// LD ROUTES
app.use('/api/v2/ld/classes', ldClasses)
app.use('/api/v2/ld/articles', ldArticles)
app.use('/api/v2/ld/clients', ldClients)
app.use('/api/v2/ld/fournisseurs', ldFournisseurs)
app.use('/api/v2/ld/factures', ldFactures)
app.use('/api/v2/ld/facture-details', ldFactureDetails)
app.use('/api/v2/ld/tiers', ldTiers)

// LEBROUSSARD ROUTES
app.use('/api/v2/leBroussard/classes', leBroussardClasses)
app.use('/api/v2/leBroussard/articles', leBroussardArticles)
app.use('/api/v2/leBroussard/clients', leBroussardClients)
app.use('/api/v2/leBroussard/fournisseurs', leBroussardFournisseurs)
app.use('/api/v2/leBroussard/factures', leBroussardFactures)
app.use('/api/v2/leBroussard/facture-details', leBroussardFactureDetails)
app.use('/api/v2/leBroussard/tiers', leBroussardTiers)

// MEARE ROUTES
app.use('/api/v2/meare/classes', meareClasses)
app.use('/api/v2/meare/articles', meareArticles)
app.use('/api/v2/meare/clients', meareClients)
app.use('/api/v2/meare/fournisseurs', meareFournisseurs)
app.use('/api/v2/meare/factures', meareFactures)
app.use('/api/v2/meare/facture-details', meareFactureDetails)
app.use('/api/v2/meare/tiers', meareTiers)

// PAITABRICOLAGE ROUTES
app.use('/api/v2/paitaBricolage/classes', paitaBricolageClasses)
app.use('/api/v2/paitaBricolage/articles', paitaBricolageArticles)
app.use('/api/v2/paitaBricolage/clients', paitaBricolageClients)
app.use('/api/v2/paitaBricolage/fournisseurs', paitaBricolageFournisseurs)
app.use('/api/v2/paitaBricolage/factures', paitaBricolageFactures)
app.use('/api/v2/paitaBricolage/facture-details', paitaBricolageFactureDetails)
app.use('/api/v2/paitaBricolage/tiers', paitaBricolageTiers)

// QC ROUTES
app.use('/api/v2/qc/classes', qcClasses)
app.use('/api/v2/qc/articles', qcArticles)
app.use('/api/v2/qc/clients', qcClients)
app.use('/api/v2/qc/fournisseurs', qcFournisseurs)
app.use('/api/v2/qc/factures', qcFactures)
app.use('/api/v2/qc/facture-details', qcFactureDetails)
app.use('/api/v2/qc/tiers', qcTiers)

// SITEC ROUTES
app.use('/api/v2/sitec/classes', sitecClasses)
app.use('/api/v2/sitec/articles', sitecArticles)
app.use('/api/v2/sitec/clients', sitecClients)
app.use('/api/v2/sitec/fournisseurs', sitecFournisseurs)
app.use('/api/v2/sitec/factures', sitecFactures)
app.use('/api/v2/sitec/facture-details', sitecFactureDetails)
app.use('/api/v2/sitec/tiers', sitecTiers)


// VKP ROUTES
app.use('/api/v2/vkp/classes', vkpClasses)
app.use('/api/v2/vkp/articles', vkpArticles)
app.use('/api/v2/vkp/clients', vkpClients)
app.use('/api/v2/vkp/fournisseurs', vkpFournisseurs)
app.use('/api/v2/vkp/factures', vkpFactures)
app.use('/api/v2/vkp/facture-details', vkpFactureDetails)
app.use('/api/v2/vkp/tiers', vkpTiers)





// Gestionnaire d'erreurs global (toujours en dernier !)
app.use(errorHandler);




// Définition du port et lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);