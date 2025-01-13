import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcFactureDetails from "../../models/bases/QC/FactureDetail.js";

// Get all QC Factures

const getQcFactureDetails = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await QcFactureDetails.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});




// Get single QC client
const getQcFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await QcFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getQcFactureDetails, getQcFactureDetail };
