import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardTiers from "../../models/bases/LE_BROUSSARD/Tier.js";

// Get all LEBROUSSARD Tiers

const getLeBroussardTiers  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await LeBroussardTiers.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});

// Get single LEBROUSSARD tier
const getLeBroussardTier = asyncHandler(async (req, res, next) => {
  const tier = await LeBroussardTiers.findById(req.params.id);
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

export { getLeBroussardTiers, getLeBroussardTier };
