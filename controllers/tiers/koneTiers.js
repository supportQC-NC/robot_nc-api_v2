import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoneTiers from "../../models/bases/KONE/KoneTier.js";

// Get all KONE Tiers
const getKoneTiers = asyncHandler(async (req, res, next) => {
  const tiers = await KoneTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single KONE tier
const getKoneTier = asyncHandler(async (req, res, next) => {
  const tier = await KoneTiers.findById(req.params.id);
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

export { getKoneTiers, getKoneTier };
