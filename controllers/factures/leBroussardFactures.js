import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardFacture from "../../models/bases/LE_BROUSSARD/Facture.js";

// Get all LEBROUSSARD Factures
const getLeBroussardFactures = asyncHandler(async (req, res, next) => {
  const factures = await LeBroussardFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single LeBroussard facture
const getLeBroussardFacture = asyncHandler(async (req, res, next) => {
  const facture = await LeBroussardFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getLeBroussardFactures, getLeBroussardFacture };
