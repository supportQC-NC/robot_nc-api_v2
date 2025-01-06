import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import VkpFacture from "../../models/bases/VKP/Facture.js";

// Get all VKP Factures
const getVkpFactures = asyncHandler(async (req, res, next) => {
  const factures = await VkpFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Vkp facture
const getVkpFacture = asyncHandler(async (req, res, next) => {
  const facture = await VkpFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getVkpFactures, getVkpFacture };
