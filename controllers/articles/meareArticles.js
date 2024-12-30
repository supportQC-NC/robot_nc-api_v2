import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import MeareArticle from "../../models/bases/MEARE/MeareArticle.js";

// Get all MEARE Articles
const getMeareArticles = asyncHandler(async (req, res, next) => {
  const articles = await MeareArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single MEARE article
const getMeareArticle = asyncHandler(async (req, res, next) => {
  const article = await MeareArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getMeareArticles,
  getMeareArticle,
};
