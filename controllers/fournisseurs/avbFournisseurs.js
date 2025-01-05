import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbFournisseurs from "../../models/bases/AVB/AVBFournisseur.js";

// Get all AVB Fournisseurs
const getAvbFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await AvbFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single AVB fournisseur
const getAvbFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await AvbFournisseurs.findById(req.params.id);
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

export { getAvbFournisseurs, getAvbFournisseur };
