import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AwFacture from "../../models/bases/AW/AwFacture.js";

// Get all AW Factures
const getAwFactures = asyncHandler(async (req, res, next) => {
  const factures = await AwFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single AW facture
const getAwFacture = asyncHandler(async (req, res, next) => {
  const facture = await AwFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getAwFactures, getAwFacture };
