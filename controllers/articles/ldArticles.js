import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LdArticle from "../../models/bases/LD/LdArticle.js";

// Get all LD Articles
const getLdArticles = asyncHandler(async (req, res, next) => {
  const articles = await LdArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single LD article
const getLdArticle = asyncHandler(async (req, res, next) => {
  const article = await LdArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getLdArticles,
  getLdArticle,
};
