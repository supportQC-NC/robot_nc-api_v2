import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoneFactureDetails from "../../models/bases/KONE/KoneFactureDetail.js";

// Get all KONE Factures
const getKoneFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await KoneFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single KONE client
const getKoneFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await KoneFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getKoneFactureDetails, getKoneFactureDetail };
