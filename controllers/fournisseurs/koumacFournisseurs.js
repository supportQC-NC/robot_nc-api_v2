import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacFournisseurs from "../../models/bases/KOUMAC/Fournisseur.js";

// Get all KOUMAC Fournisseurs


const getKoumacFournisseurs  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await KoumacFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});

// Get single KOUMAC fournisseur
const getKoumacFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await KoumacFournisseurs.findById(req.params.id);
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

export { getKoumacFournisseurs, getKoumacFournisseur };
