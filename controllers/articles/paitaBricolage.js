import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageArticle from "../../models/bases/PAITA_BRICOLAGE/PaitaBricolageArticle.js";

// Get all PAITABRICOLAGE Articles
const getPaitaBricolageArticles = asyncHandler(async (req, res, next) => {
  const articles = await PaitaBricolageArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single PAITABRICOLAGE article
const getPaitaBricolageArticle = asyncHandler(async (req, res, next) => {
  const article = await PaitaBricolageArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getPaitaBricolageArticles,
  getPaitaBricolageArticle,
};
