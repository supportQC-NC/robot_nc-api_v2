import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import FmbArticle from "../../models/bases/FMB/FmbArticle.js";

// Get all FMB Articles
const getFmbArticles = asyncHandler(async (req, res, next) => {
  const articles = await FmbArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single FMB article
const getFmbArticle = asyncHandler(async (req, res, next) => {
  const article = await FmbArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getFmbArticles,
  getFmbArticle,
};
