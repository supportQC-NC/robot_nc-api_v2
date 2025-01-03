import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcFournisseurs from "../../models/bases/QC/QcFournisseur.js";

// Get all QC Fournisseurs
const getQcFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await QcFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single QC fournisseur
const getQcFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await QcFournisseurs.findById(req.params.id);
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

export { getQcFournisseurs, getQcFournisseur };
