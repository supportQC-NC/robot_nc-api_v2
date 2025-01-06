import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import VkpTiers from "../../models/bases/VKP/Tier.js";

// Get all VKP Tiers
const getVkpTiers = asyncHandler(async (req, res, next) => {
  const tiers = await VkpTiers.find();

  res
    .status(200)
    .json({ success: true, count: tiers.length, data: tiers });          
});



// Get single VKP tier
const getVkpTier = asyncHandler(async (req, res, next) => {
  const tier = await VkpTiers.findById(req.params.id);
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



export { getVkpTiers, getVkpTier };
