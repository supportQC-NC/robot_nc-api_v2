import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import FmbFacture from "../../models/bases/FMB/Facture.js";

// Get all FMB Factures
const getFmbFactures = asyncHandler(async (req, res, next) => {
  const factures = await FmbFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Fmb facture
const getFmbFacture = asyncHandler(async (req, res, next) => {
  const facture = await FmbFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getFmbFactures, getFmbFacture };
