import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import SitecFactureDetails from "../../models/bases/SITEC/SitecFactureDetail.js";

// Get all SITEC Factures
const getSitecFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await SitecFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single SITEC client
const getSitecFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await SitecFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getSitecFactureDetails, getSitecFactureDetail };
