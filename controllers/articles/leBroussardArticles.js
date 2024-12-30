import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardArticle from "../../models/bases/LE_BROUSSARD/LeBroussardArticle.js";

// Get all LEBROUSSARD Articles
const getLeBroussardArticles = asyncHandler(async (req, res, next) => {
  const articles = await LeBroussardArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single LEBROUSSARD article
const getLeBroussardArticle = asyncHandler(async (req, res, next) => {
  const article = await LeBroussardArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getLeBroussardArticles,
  getLeBroussardArticle,
};
