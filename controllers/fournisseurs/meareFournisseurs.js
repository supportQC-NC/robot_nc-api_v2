import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import MeareFournisseurs from "../../models/bases/MEARE/Fournisseur.js";

// Get all MEARE Fournisseurs
const getMeareFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await MeareFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single MEARE fournisseur
const getMeareFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await MeareFournisseurs.findById(req.params.id);
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

export { getMeareFournisseurs, getMeareFournisseur };
