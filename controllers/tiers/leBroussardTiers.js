import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardTiers from "../../models/bases/LE_BROUSSARD/Tier.js";

// Get all LEBROUSSARD Tiers
const getLeBroussardTiers = asyncHandler(async (req, res, next) => {
  const tiers = await LeBroussardTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single LEBROUSSARD tier
const getLeBroussardTier = asyncHandler(async (req, res, next) => {
  const tier = await LeBroussardTiers.findById(req.params.id);
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

export { getLeBroussardTiers, getLeBroussardTier };
