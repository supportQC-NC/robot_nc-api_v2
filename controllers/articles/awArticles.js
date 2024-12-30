import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AwArticle from "../../models/bases/AW/AwArticle.js";

// Get all AVB Articles
const getAwArticles = asyncHandler(async (req, res, next) => {
  const articles = await AwArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single AVB article
const getAwArticle = asyncHandler(async (req, res, next) => {
  const article = await AwArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getAwArticles,
  getAwArticle,

};
