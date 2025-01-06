import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import HdTiers from "../../models/bases/HD/Tier.js";

// Get all HD Tiers
const getHdTiers = asyncHandler(async (req, res, next) => {
  const tiers = await HdTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single HD tier
const getHdTier = asyncHandler(async (req, res, next) => {
  const tier = await HdTiers.findById(req.params.id);
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

export { getHdTiers, getHdTier };
