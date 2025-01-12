import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import SitecArticle from "../../models/bases/SITEC/Article.js";

// Get all SITEC Articles

const  getSitecArticles = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await SitecArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});




// Get single SITEC article
const getSitecArticle = asyncHandler(async (req, res, next) => {
  const article = await SitecArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getSitecArticles,
  getSitecArticle,
};
