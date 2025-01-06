import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoneFournisseurs from "../../models/bases/KONE/Fournisseur.js";

// Get all KONE Fournisseurs
const getKoneFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await KoneFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single KONE fournisseur
const getKoneFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await KoneFournisseurs.findById(req.params.id);
  if (!fournisseur) {
    return next(
      new ErrorResponse(
        `Fournisseur not found with id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: fournisseur });
});

export { getKoneFournisseurs, getKoneFournisseur };
