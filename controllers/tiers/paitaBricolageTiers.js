import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageTiers from "../../models/bases/PAITA_BRICOLAGE/Tier.js";

// Get all PAITABRICOLAGE Tiers



const getPaitaBricolageTiers  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await PaitaBricolageTiers.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single PAITABRICOLAGE tier
const getPaitaBricolageTier = asyncHandler(async (req, res, next) => {
  const tier = await PaitaBricolageTiers.findById(req.params.id);
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

export { getPaitaBricolageTiers, getPaitaBricolageTier };
