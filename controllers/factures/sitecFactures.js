import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import SitecFacture from "../../models/bases/SITEC/SitecFacture.js";

// Get all SITEC Factures
const getSitecFactures = asyncHandler(async (req, res, next) => {
  const factures = await SitecFacture.find();

  res.status(200).json({ success: true, count: factures.length, data: factures });
});

// Get single Sitec facture
const getSitecFacture = asyncHandler(async (req, res, next) => {
  const facture = await SitecFacture.findById(req.params.id);
  if (!facture) {
    return next(
      new ErrorResponse(`Facture not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: facture });
});

export { getSitecFactures, getSitecFacture };
