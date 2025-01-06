import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import FmbFactureDetails from "../../models/bases/FMB/FactureDetail.js";

// Get all AW Factures
const getFmbFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await FmbFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single AW client
const getFmbFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await FmbFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getFmbFactureDetails, getFmbFactureDetail };
