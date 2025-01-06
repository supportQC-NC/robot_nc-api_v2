import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import HdFournisseurs from "../../models/bases/HD/Fournisseur.js";

// Get all HD Fournisseurs
const getHdFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await HdFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single HD fournisseur
const getHdFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await HdFournisseurs.findById(req.params.id);
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

export { getHdFournisseurs, getHdFournisseur };
