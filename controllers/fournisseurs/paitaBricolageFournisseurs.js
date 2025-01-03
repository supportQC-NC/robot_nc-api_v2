import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageFournisseurs from "../../models/bases/PAITA_BRICOLAGE/PaitaBricolageFournisseur.js";

// Get all PAITABRICOLAGE Fournisseurs
const getPaitaBricolageFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await PaitaBricolageFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single PAITABRICOLAGE fournisseur
const getPaitaBricolageFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await PaitaBricolageFournisseurs.findById(req.params.id);
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

export { getPaitaBricolageFournisseurs, getPaitaBricolageFournisseur };
