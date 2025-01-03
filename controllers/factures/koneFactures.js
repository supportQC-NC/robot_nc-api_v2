import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoneFacture from "../../models/bases/KONE/KoneFacture.js";

// Get all KONE Factures
const getKoneFactures = asyncHandler(async (req, res, next) => {
  const factures = await KoneFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Kone facture
const getKoneFacture = asyncHandler(async (req, res, next) => {
  const facture = await KoneFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getKoneFactures, getKoneFacture };
