import mongoose from 'mongoose';

// 2. Schéma de l'Agent (AGENT)
const CompagnySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Veuillez fournir le nom de la compagnie"],
      maxlength: [50, "Le nom ne peut pas dépasser 50 caractères"],
      trim: true,
    },
    acronyme: {
      type: String,
      required: [true, "Veuillez fournir l'acronyme de la compagnie"],
      trim: true,
      maxlength: [20, "L'acronyme ne peut pas dépasser 5 caractères"],
    },
    website: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Veuillez fournir l'adresse de la compagny"],
      maxlength: [100, "L'adresse ne peut pas dépasser 100 caractères"],
      trim: true,
    },
    logo: {
      type: String,
    },
    fiscalYearStart: {
      type: Number,
      required: [true, "Veuillez fournir le début de l'année fiscale (mois)"],
      min: [1, "Le mois doit être entre 1 (janvier) et 12 (décembre)"],
      max: [12, "Le mois doit être entre 1 (janvier) et 12 (décembre)"],
    },
    fiscalYearEnd: {
      type: Number,
      required: [true, "Veuillez fournir la fin de l'année fiscale (mois)"],
      min: [1, "Le mois doit être entre 1 (janvier) et 12 (décembre)"],
      max: [12, "Le mois doit être entre 1 (janvier) et 12 (décembre)"],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Compagny', CompagnySchema);
