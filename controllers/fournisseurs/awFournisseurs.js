import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AwFournisseurs from "../../models/bases/AW/Fournisseur.js";

// Get all AW Fournisseurs


const getAwFournisseurs = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await AwFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});











// Get single AW fournisseur
const getAwFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await AwFournisseurs.findById(req.params.id);
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

export { getAwFournisseurs, getAwFournisseur };
