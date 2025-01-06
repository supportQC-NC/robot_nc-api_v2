import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardFournisseurs from "../../models/bases/LE_BROUSSARD/Fournisseur.js";

// Get all LEBROUSSARD Fournisseurs
const getLeBroussardFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await LeBroussardFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single LEBROUSSARD fournisseur
const getLeBroussardFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await LeBroussardFournisseurs.findById(req.params.id);
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

export { getLeBroussardFournisseurs, getLeBroussardFournisseur };
