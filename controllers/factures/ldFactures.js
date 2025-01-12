import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LdFacture from "../../models/bases/LD//Facture.js";

// Get all LD Factures

const getLdFactures = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await LdFacture.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});


// Get single Ld facture
const getLdFacture = asyncHandler(async (req, res, next) => {
  const facture = await LdFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getLdFactures, getLdFacture };
