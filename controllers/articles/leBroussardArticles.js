import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardArticle from "../../models/bases/LE_BROUSSARD/Article.js";




const getLeBroussardArticles  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await LeBroussardArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});


// Get single LEBROUSSARD article
const getLeBroussardArticle = asyncHandler(async (req, res, next) => {
  const article = await LeBroussardArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getLeBroussardArticles,
  getLeBroussardArticle,
};
