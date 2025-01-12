import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcFacture from "../../models/bases/QC/Facture.js";

// Get all QC Factures

const getQcFactures = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await QcFacture.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single Qc facture
const getQcFacture = asyncHandler(async (req, res, next) => {
  const facture = await QcFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getQcFactures, getQcFacture };
