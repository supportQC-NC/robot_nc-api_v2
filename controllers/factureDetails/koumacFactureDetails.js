import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacFactureDetails from "../../models/bases/KOUMAC/FactureDetail.js";

// Get all KOUMAC Factures
const getKoumacFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await KoumacFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single KOUMAC client
const getKoumacFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await KoumacFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getKoumacFactureDetails, getKoumacFactureDetail };
