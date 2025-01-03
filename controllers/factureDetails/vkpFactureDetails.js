import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import VkpFactureDetails from "../../models/bases/VKP/VkpFactureDetail.js";

// Get all VKP Factures
const getVkpFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await VkpFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single VKP client
const getVkpFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await VkpFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getVkpFactureDetails, getVkpFactureDetail };
