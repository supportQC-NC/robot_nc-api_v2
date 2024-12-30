import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqArticle from "../../models/bases/DQ/DqArticle.js";

// Get all DQ Articles
const getDqArticles = asyncHandler(async (req, res, next) => {
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
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getDqArticles,
  getDqArticle,
};
