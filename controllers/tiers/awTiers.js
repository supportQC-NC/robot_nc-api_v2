import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AwTiers from "../../models/bases/AW/AwTier.js";

// Get all AW Tiers
const getAwTiers = asyncHandler(async (req, res, next) => {
  const tiers = await AwTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single AW tier
const getAwTier = asyncHandler(async (req, res, next) => {
  const tier = await AwTiers.findById(req.params.id);
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

export { getAwTiers, getAwTier };
