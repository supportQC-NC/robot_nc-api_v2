import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacFournisseurs from "../../models/bases/KOUMAC/KoumacFournisseur.js";

// Get all KOUMAC Fournisseurs
const getKoumacFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await KoumacFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single KOUMAC fournisseur
const getKoumacFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await KoumacFournisseurs.findById(req.params.id);
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

export { getKoumacFournisseurs, getKoumacFournisseur };
