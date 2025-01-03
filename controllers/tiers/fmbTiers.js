import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import FmbTiers from "../../models/bases/FMB/FmbTier.js";

// Get all FMB Tiers
const getFmbTiers = asyncHandler(async (req, res, next) => {
  const tiers = await FmbTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single FMB tier
const getFmbTier = asyncHandler(async (req, res, next) => {
  const tier = await FmbTiers.findById(req.params.id);
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

export { getFmbTiers, getFmbTier };
