import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbTiers from "../../models/bases/AVB/Tier.js";

// Get all AVB Tiers
const getAvbTiers = asyncHandler(async (req, res, next) => {
  const tiers = await AvbTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single AVB tier
const getAvbTier = asyncHandler(async (req, res, next) => {
  const tier = await AvbTiers.findById(req.params.id);
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

export { getAvbTiers, getAvbTier };
