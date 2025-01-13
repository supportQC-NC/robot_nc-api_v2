import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbTiers from "../../models/bases/AVB/Tier.js";

// Get all AVB Tiers

const getAvbTiers  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await AvbTiers.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});


// Get single AVB tier
const getAvbTier = asyncHandler(async (req, res, next) => {
  const tier = await AvbTiers.findById(req.params.id);
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

export { getAvbTiers, getAvbTier };
