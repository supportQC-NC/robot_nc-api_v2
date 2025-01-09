import mongoose from "mongoose";

const LogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Référence au modèle utilisateur
      required: true,
    },
    action: {
      type: String,
      enum: ["Créer", "Modifier", "Supprimer", "Consulter"], // Actions possibles
      required: true,
    },

    details: {
      type: mongoose.Schema.Types.Mixed, // Permet des objets ou des chaînes
      default: {}, // Par défaut, un objet vide
    },
    result: {
      type: String,
      enum: ["Succès", "Échec"], // Résultat de l'action
      default: "Succès",
    },
 
    timestamp: {
      type: Date,
      default: Date.now, // Date et heure
    },
  },
  {
    timestamps: false, // Désactiver les champs `createdAt` et `updatedAt` automatiques
  }
);



export default mongoose.model("Log", LogSchema);
