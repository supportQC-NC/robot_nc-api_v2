import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LdFactureDetails from "../../models/bases/LD/FactureDetail.js";

// Get all LD Factures
const getLdFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await LdFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single LD client
const getLdFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await LdFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getLdFactureDetails, getLdFactureDetail };
