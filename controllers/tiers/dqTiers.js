import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqTiers from "../../models/bases/DQ/Tier.js";

// Get all DQ Tiers



const getDqTiers  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await DqTiers.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});




// Get single DQ tier
const getDqTier = asyncHandler(async (req, res, next) => {
  const tier = await DqTiers.findById(req.params.id);
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

export { getDqTiers, getDqTier };
