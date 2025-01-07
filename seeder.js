/////////////////////////////////////////////////
// seeder.js
/////////////////////////////////////////////////
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

// Pour gérer __filename et __dirname dans un module ES
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Création de __filename et __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Charge les variables d'environnement
dotenv.config({ path: './config/config.env' });

// Importe les modèles
import Bootcamp from './models/Bootcamp.js';
import Course from './models/Course.js';
import Compagny from './models/Company.js';
import User from './models/User.js';
import Review from './models/Review.js';

// Connexion à la base MongoDB
mongoose.connect(process.env.MONGO_URI);

// Lecture des fichiers JSON
const bootcamps = JSON.parse(
  fs.readFileSync(path.join(__dirname, '_data', 'bootcamps.json'), 'utf-8')
);

const courses = JSON.parse(
  fs.readFileSync(path.join(__dirname, '_data', 'courses.json'), 'utf-8')
);

const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, '_data', 'users.json'), 'utf-8')
);

const compagnies = JSON.parse(
  fs.readFileSync(path.join(__dirname, '_data', 'compagnies.json'), 'utf-8')
);
const reviews = JSON.parse(
  fs.readFileSync(path.join(__dirname, '_data', 'reviews.json'), 'utf-8')
);

// Fonction d’import de données
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    await Course.create(courses);
    await Compagny.create(compagnies);
    await User.create(users);
    await Review.create(reviews);

    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Fonction de suppression de données
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    await Course.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    await Compagny.deleteMany();

    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Récupère l’argument passé en ligne de commande
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
