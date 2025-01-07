import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageTiers from "../../models/bases/PAITA_BRICOLAGE/Tier.js";

// Get all PAITABRICOLAGE Tiers
const getPaitaBricolageTiers = asyncHandler(async (req, res, next) => {
  const tiers = await PaitaBricolageTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
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
