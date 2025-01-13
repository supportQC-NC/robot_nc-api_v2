import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardFactureDetails from "../../models/bases/LE_BROUSSARD/FactureDetail.js";

// Get all LEBROUSSARD Factures

const getLeBroussardFactureDetails = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await LeBroussardFactureDetails.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});

// Get single LEBROUSSARD client
const getLeBroussardFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await LeBroussardFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getLeBroussardFactureDetails, getLeBroussardFactureDetail };
