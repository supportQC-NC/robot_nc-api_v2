import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcArticle from "../../models/bases/QC/Article.js";

// Get all QC Articles
const getQcArticles = asyncHandler(async (req, res, next) => {
  const articles = await QcArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single QC article
const getQcArticle = asyncHandler(async (req, res, next) => {
  const article = await QcArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getQcArticles,
  getQcArticle,
};
