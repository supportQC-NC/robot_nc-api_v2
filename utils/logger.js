import Log from "../models/Log.js"; // Importez le modèle Log

/**
 * Fonction pour créer un log
 * @param {ObjectId} userId - ID de l'utilisateur
 * @param {String} action - Action réalisée (Créer, Modifier, Supprimer, Consulter)
 * @param {Object|String} details - Détails de l'action
 * @param {String} result - Résultat de l'action (Succès, Échec)
 */
const createLog = async (userId, action, details = {}, result = "Succès") => {
  try {
    await Log.create({
      user: userId,
      action,
      details,
      result,
    });
    console.log(`Log enregistré: ${action} par utilisateur ${userId}`);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du log:", error.message);
  }
};

export default createLog;
