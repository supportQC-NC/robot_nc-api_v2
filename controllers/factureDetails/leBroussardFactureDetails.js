import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardFactureDetails from "../../models/bases/LE_BROUSSARD/FactureDetail.js";

// Get all LEBROUSSARD Factures
const getLeBroussardFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await LeBroussardFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single LEBROUSSARD client
const getLeBroussardFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await LeBroussardFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getLeBroussardFactureDetails, getLeBroussardFactureDetail };
