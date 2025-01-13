import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoneFournisseurs from "../../models/bases/KONE/Fournisseur.js";

// Get all KONE Fournisseurs


const getKoneFournisseurs  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await KoneFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});




// Get single KONE fournisseur
const getKoneFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await KoneFournisseurs.findById(req.params.id);
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

export { getKoneFournisseurs, getKoneFournisseur };
