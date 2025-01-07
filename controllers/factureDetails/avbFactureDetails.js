import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbFactureDetails from "../../models/bases/AVB/FactureDetail.js";

// Get all AVB Factures
const getAvbFactureDetails = asyncHandler(async (req, res, next) => {
  const factureDetails = await AvbFactureDetails.find();

  res.status(200).json({ success: true, count: factureDetails.length, data: factureDetails });
});

// Get single AVB client
const getAvbFactureDetail = asyncHandler(async (req, res, next) => {
  const factureDetail = await AvbFactureDetails.findById(req.params.id);
  if (!factureDetail) {
    return next(
      new ErrorResponse(`Details de la facture non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: factureDetail });
});



export { getAvbFactureDetails, getAvbFactureDetail };
