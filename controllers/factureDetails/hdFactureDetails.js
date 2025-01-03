import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import HdFactureDetails from "../../models/bases/HD/HdFactureDetail.js";

// Get all HD Factures
const getHdFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await HdFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single HD client
const getHdFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await HdFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getHdFactureDetails, getHdFactureDetail };
