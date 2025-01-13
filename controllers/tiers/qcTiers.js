import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcTiers from "../../models/bases/QC/Tier.js";

// Get all QC Tiers

const getQcTiers  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await QcTiers.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});







// Get single QC tier
const getQcTier = asyncHandler(async (req, res, next) => {
  const tier = await QcTiers.findById(req.params.id);
  if (!tier) {
    return next(
      new ErrorResponse(
        `Tier non trouvé avec l'id : ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: tier });
});

export { getQcTiers, getQcTier };
