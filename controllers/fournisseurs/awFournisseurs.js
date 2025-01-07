import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AwFournisseurs from "../../models/bases/AW/Fournisseur.js";

// Get all AW Fournisseurs
const getAwFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await AwFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single AW fournisseur
const getAwFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await AwFournisseurs.findById(req.params.id);
  if (!fournisseur) {
    return next(
      new ErrorResponse(
        `Fournisseur non trouvé avec l'id : ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: fournisseur });
});

export { getAwFournisseurs, getAwFournisseur };
