import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbFacture from "../../models/bases/AVB/AvbFacture.js";

// Get all AVB Factures
const getAvbFactures = asyncHandler(async (req, res, next) => {
  const factures = await AvbFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single AVB facture
const getAvbFacture = asyncHandler(async (req, res, next) => {
  const facture = await AvbFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getAvbFactures, getAvbFacture };
