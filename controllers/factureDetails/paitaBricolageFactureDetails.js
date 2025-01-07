import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageFactureDetails from "../../models/bases/PAITA_BRICOLAGE/FactureDetail.js";

// Get all PAITABRICOLAGE Factures
const getPaitaBricolageFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await PaitaBricolageFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single PAITABRICOLAGE client
const getPaitaBricolageFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await PaitaBricolageFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getPaitaBricolageFactureDetails, getPaitaBricolageFactureDetail };
