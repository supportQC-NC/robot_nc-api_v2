import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqFournisseurs from "../../models/bases/DQ/DqFournisseur.js";

// Get all DQ Fournisseurs
const getDqFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await DqFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single DQ fournisseur
const getDqFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await DqFournisseurs.findById(req.params.id);
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

export { getDqFournisseurs, getDqFournisseur };
