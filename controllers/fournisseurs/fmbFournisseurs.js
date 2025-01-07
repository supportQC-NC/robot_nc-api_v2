import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import FmbFournisseurs from "../../models/bases/FMB/Fournisseur.js";

// Get all FMB Fournisseurs
const getFmbFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await FmbFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single FMB fournisseur
const getFmbFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await FmbFournisseurs.findById(req.params.id);
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

export { getFmbFournisseurs, getFmbFournisseur };
