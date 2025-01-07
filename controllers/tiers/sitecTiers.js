import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import SitecTiers from "../../models/bases/SITEC/Tier.js";

// Get all SITEC Tiers
const getSitecTiers = asyncHandler(async (req, res, next) => {
  const tiers = await SitecTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single SITEC tier
const getSitecTier = asyncHandler(async (req, res, next) => {
  const tier = await SitecTiers.findById(req.params.id);
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

export { getSitecTiers, getSitecTier };
