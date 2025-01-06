import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import VkpFournisseurs from "../../models/bases/VKP/Fournisseur.js";

// Get all VKP Fournisseurs
const getVkpFournisseurs = asyncHandler(async (req, res, next) => {
  const fournisseurs = await VkpFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: fournisseurs.length, data: fournisseurs });
});

// Get single VKP fournisseur
const getVkpFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await VkpFournisseurs.findById(req.params.id);
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

export { getVkpFournisseurs, getVkpFournisseur };
