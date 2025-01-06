import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import MeareFactureDetails from "../../models/bases/MEARE/FactureDetail.js";

// Get all MEARE Factures
const getMeareFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await MeareFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single MEARE client
const getMeareFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await MeareFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getMeareFactureDetails, getMeareFactureDetail };
