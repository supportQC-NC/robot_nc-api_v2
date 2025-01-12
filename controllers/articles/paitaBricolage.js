import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageArticle from "../../models/bases/PAITA_BRICOLAGE/Article.js";



const getPaitaBricolageArticles  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await PaitaBricolageArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});






// Get single PAITABRICOLAGE article
const getPaitaBricolageArticle = asyncHandler(async (req, res, next) => {
  const article = await PaitaBricolageArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getPaitaBricolageArticles,
  getPaitaBricolageArticle,
};
