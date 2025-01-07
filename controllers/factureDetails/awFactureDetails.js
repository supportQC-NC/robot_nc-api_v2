import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AwFactureDetails from "../../models/bases/AW/FactureDetail.js";

// Get all AW Factures
const getAwFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await AwFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single AW client
const getAwFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await AwFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getAwFactureDetails, getAwFactureDetail };
