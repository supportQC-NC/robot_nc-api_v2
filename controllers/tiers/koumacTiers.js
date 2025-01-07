import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacTiers from "../../models/bases/KOUMAC/Tier.js";

// Get all KOUMAC Tiers
const getKoumacTiers = asyncHandler(async (req, res, next) => {
  const tiers = await KoumacTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });
});

// Get single KOUMAC tier
const getKoumacTier = asyncHandler(async (req, res, next) => {
  const tier = await KoumacTiers.findById(req.params.id);
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

export { getKoumacTiers, getKoumacTier };
