import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageFactureDetails from "../../models/bases/PAITA_BRICOLAGE/FactureDetail.js";

// Get all PAITABRICOLAGE Factures

const getPaitaBricolageFactureDetails = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await PaitaBricolageFactureDetails.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single PAITABRICOLAGE client
const getPaitaBricolageFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await PaitaBricolageFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getPaitaBricolageFactureDetails, getPaitaBricolageFactureDetail };
