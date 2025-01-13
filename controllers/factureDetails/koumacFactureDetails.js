import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacFactureDetails from "../../models/bases/KOUMAC/FactureDetail.js";

// Get all KOUMAC Factures

const getKoumacFactureDetails  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await KoumacFactureDetails.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});





// Get single KOUMAC client
const getKoumacFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await KoumacFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getKoumacFactureDetails, getKoumacFactureDetail };
