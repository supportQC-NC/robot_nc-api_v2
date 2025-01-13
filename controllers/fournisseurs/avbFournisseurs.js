import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbFournisseurs from "../../models/bases/AVB/Fournisseur.js";





const getAvbFournisseurs = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await AvbFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});







// Get single AVB fournisseur
const getAvbFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await AvbFournisseurs.findById(req.params.id);
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

export { getAvbFournisseurs, getAvbFournisseur };
