import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqFacture from "../../models/bases/DQ/Facture.js";

// Get all DQ Factures
const getDqFactures = asyncHandler(async (req, res, next) => {
  const factures = await DqFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Dq facture
const getDqFacture = asyncHandler(async (req, res, next) => {
  const facture = await DqFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getDqFactures, getDqFacture };
