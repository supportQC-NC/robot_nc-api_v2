import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import SitecFactureDetails from "../../models/bases/SITEC/FactureDetail.js";

// Get all SITEC Factures
const getSitecFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await SitecFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single SITEC client
const getSitecFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await SitecFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getSitecFactureDetails, getSitecFactureDetail };
