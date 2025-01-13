import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LdFournisseurs from "../../models/bases/LD/Fournisseur.js";

// Get all LD Fournisseurs

const getLdFournisseurs  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await LdFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});

// Get single LD fournisseur
const getLdFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await LdFournisseurs.findById(req.params.id);
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

export { getLdFournisseurs, getLdFournisseur };
