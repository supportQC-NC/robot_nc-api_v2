import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import VkpFournisseurs from "../../models/bases/VKP/Fournisseur.js";

// Get all VKP Fournisseurs

const getVkpFournisseurs  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await VkpFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});

// Get single VKP fournisseur
const getVkpFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await VkpFournisseurs.findById(req.params.id);
  if (!fournisseur) {
    return next(
      new ErrorResponse(
        `Fournisseur non trouvé avec l'id : ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: fournisseur });
});

export { getVkpFournisseurs, getVkpFournisseur };
