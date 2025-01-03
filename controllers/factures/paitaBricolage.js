import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageFacture from "../../models/bases/PAITA_BRICOLAGE/PaitaBricolageFacture.js";

// Get all PAITABRICOLAGE Factures
const getPaitaBricolageFactures = asyncHandler(async (req, res, next) => {
  const factures = await PaitaBricolageFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single PaitaBricolage facture
const getPaitaBricolageFacture = asyncHandler(async (req, res, next) => {
  const facture = await PaitaBricolageFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getPaitaBricolageFactures, getPaitaBricolageFacture };
