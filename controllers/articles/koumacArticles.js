import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacArticle from "../../models/bases/KOUMAC/KoumacArticle.js";

// Get all KOUMAC Articles
const getKoumacArticles = asyncHandler(async (req, res, next) => {
  const articles = await KoumacArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single KOUMAC article
const getKoumacArticle = asyncHandler(async (req, res, next) => {
  const article = await KoumacArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getKoumacArticles,
  getKoumacArticle,
};
