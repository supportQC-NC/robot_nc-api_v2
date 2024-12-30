import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import VkpArticle from "../../models/bases/VKP/VkpArticle.js";

// Get all VKP Articles
const getVkpArticles = asyncHandler(async (req, res, next) => {
  const articles = await VkpArticle.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});



// Get single VKP article
const getVkpArticle = asyncHandler(async (req, res, next) => {
  const article = await VkpArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});





export {
  getVkpArticles,
  getVkpArticle,
};
