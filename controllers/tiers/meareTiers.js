import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import MeareTiers from "../../models/bases/MEARE/Tier.js";

// Get all MEARE Tiers
const getMeareTiers = asyncHandler(async (req, res, next) => {
  const tiers = await MeareTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single MEARE tier
const getMeareTier = asyncHandler(async (req, res, next) => {
  const tier = await MeareTiers.findById(req.params.id);
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

export { getMeareTiers, getMeareTier };
