import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcFacture from "../../models/bases/QC/Facture.js";

// Get all QC Factures
const getQcFactures = asyncHandler(async (req, res, next) => {
  const factures = await QcFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Qc facture
const getQcFacture = asyncHandler(async (req, res, next) => {
  const facture = await QcFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getQcFactures, getQcFacture };
