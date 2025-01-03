import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqFactureDetails from "../../models/bases/DQ/DqFactureDetail.js";

// Get all AW Factures
const getDqFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await DqFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single AW client
const getDqFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await DqFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getDqFactureDetails, getDqFactureDetail };
