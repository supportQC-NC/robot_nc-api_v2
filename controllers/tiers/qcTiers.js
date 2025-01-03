import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcTiers from "../../models/bases/QC/QcTier.js";

// Get all QC Tiers
const getQcTiers = asyncHandler(async (req, res, next) => {
  const tiers = await QcTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single QC tier
const getQcTier = asyncHandler(async (req, res, next) => {
  const tier = await QcTiers.findById(req.params.id);
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

export { getQcTiers, getQcTier };
