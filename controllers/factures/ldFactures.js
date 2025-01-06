import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LdFacture from "../../models/bases/LD//Facture.js";

// Get all LD Factures
const getLdFactures = asyncHandler(async (req, res, next) => {
  const factures = await LdFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Ld facture
const getLdFacture = asyncHandler(async (req, res, next) => {
  const facture = await LdFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getLdFactures, getLdFacture };
