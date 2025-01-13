import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import MeareFactureDetails from "../../models/bases/MEARE/FactureDetail.js";

// Get all MEARE Factures

const getMeareFactureDetails = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await MeareFactureDetails.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});


// Get single MEARE client
const getMeareFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await MeareFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getMeareFactureDetails, getMeareFactureDetail };
