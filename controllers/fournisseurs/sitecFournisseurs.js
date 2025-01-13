import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import SitecFournisseurs from "../../models/bases/SITEC/Fournisseur.js"

// Get all SITEC Fournisseurs


const getSitecFournisseurs  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await SitecFournisseurs.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});


// Get single SITEC fournisseur
const getSitecFournisseur = asyncHandler(async (req, res, next) => {
  const fournisseur = await SitecFournisseurs.findById(req.params.id);
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

export { getSitecFournisseurs, getSitecFournisseur };
