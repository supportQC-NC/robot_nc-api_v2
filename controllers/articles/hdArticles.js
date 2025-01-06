import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import HdArticle from "../../models/bases/HD/Article.js";

// Get all HD Articles
const getHdArticles = asyncHandler(async (req, res, next) => {
  const articles = await HdArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single HD article
const getHdArticle = asyncHandler(async (req, res, next) => {
  const article = await HdArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getHdArticles,
  getHdArticle,
};
