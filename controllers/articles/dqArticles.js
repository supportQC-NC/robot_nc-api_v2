import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqArticle from "../../models/bases/DQ/Article.js";




const getDqArticles  = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await DqArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});


// Get single DQ article
const getDqArticle = asyncHandler(async (req, res, next) => {
  const article = await DqArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article Article non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getDqArticles,
  getDqArticle,
};
