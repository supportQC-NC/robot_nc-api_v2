import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbFactureDetails from "../../models/bases/AVB/AvbFactureDetail.js";

// Get all AVB Factures
const getAvbFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await AvbFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single AVB client
const getAvbFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await AvbFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getAvbFactureDetails, getAvbFactureDetail };
