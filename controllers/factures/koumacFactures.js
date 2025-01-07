import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacFacture from "../../models/bases/KOUMAC/Facture.js";

// Get all KOUMAC Factures
const getKoumacFactures = asyncHandler(async (req, res, next) => {
  const factures = await KoumacFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Koumac facture
const getKoumacFacture = asyncHandler(async (req, res, next) => {
  const facture = await KoumacFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture non trouvé avec l'id :${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getKoumacFactures, getKoumacFacture };
