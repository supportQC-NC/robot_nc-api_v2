import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import HdFacture from "../../models/bases/HD/Facture.js";

// Get all HD Factures
const getHdFactures = asyncHandler(async (req, res, next) => {
  const factures = await HdFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Hd facture
const getHdFacture = asyncHandler(async (req, res, next) => {
  const facture = await HdFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getHdFactures, getHdFacture };
