import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcFactureDetails from "../../models/bases/QC/QcFactureDetail.js";

// Get all QC Factures
const getQcFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await QcFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single QC client
const getQcFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await QcFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getQcFactureDetails, getQcFactureDetail };
