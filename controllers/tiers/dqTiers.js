import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqTiers from "../../models/bases/DQ/Tier.js";

// Get all DQ Tiers
const getDqTiers = asyncHandler(async (req, res, next) => {
  const tiers = await DqTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single DQ tier
const getDqTier = asyncHandler(async (req, res, next) => {
  const tier = await DqTiers.findById(req.params.id);
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

export { getDqTiers, getDqTier };
