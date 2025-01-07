import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbArticle from "../../models/bases/AVB/Article.js";

// Get all AVB Articles
const getAvbArticles = asyncHandler(async (req, res, next) => {
  const articles = await AvbArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single AVB article
const getAvbArticle = asyncHandler(async (req, res, next) => {
  const article = await AvbArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getAvbArticles,
  getAvbArticle,
};
