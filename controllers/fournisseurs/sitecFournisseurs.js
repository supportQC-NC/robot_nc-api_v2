import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import SitecFournisseurs from "../../models/bases/SITEC/Fournisseur.js"

// Get all SITEC Fournisseurs
const getSitecFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await SitecFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single SITEC fournisseur
const getSitecFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await SitecFournisseurs.findById(req.params.id);
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

export { getSitecFournisseurs, getSitecFournisseur };
