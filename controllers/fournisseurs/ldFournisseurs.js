import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LdFournisseurs from "../../models/bases/LD/Fournisseur.js";

// Get all LD Fournisseurs
const getLdFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await LdFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single LD fournisseur
const getLdFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await LdFournisseurs.findById(req.params.id);
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

export { getLdFournisseurs, getLdFournisseur };
