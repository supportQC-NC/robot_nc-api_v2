import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoneArticle from "../../models/bases/KONE/Article.js";

// Get all KONE Articles
const getKoneArticles = asyncHandler(async (req, res, next) => {
  const articles = await KoneArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single KONE article
const getKoneArticle = asyncHandler(async (req, res, next) => {
  const article = await KoneArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getKoneArticles,
  getKoneArticle,
};
