import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import MeareFacture from "../../models/bases/MEARE/MeareFacture.js";

// Get all MEARE Factures
const getMeareFactures = asyncHandler(async (req, res, next) => {
  const factures = await MeareFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Meare facture
const getMeareFacture = asyncHandler(async (req, res, next) => {
  const facture = await MeareFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getMeareFactures, getMeareFacture };
