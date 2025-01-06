import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LdTiers from "../../models/bases/LD/Tier.js";

// Get all LD Tiers
const getLdTiers = asyncHandler(async (req, res, next) => {
  const tiers = await LdTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single LD tier
const getLdTier = asyncHandler(async (req, res, next) => {
  const tier = await LdTiers.findById(req.params.id);
  if (!tier) {
    return next(
      new ErrorResponse(
        `Tier not found with id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: tier });
});

export { getLdTiers, getLdTier };
