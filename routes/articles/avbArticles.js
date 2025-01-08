import express from "express";
import {
  getAvbArticles,
  getAvbArticle,
} from "../../controllers/articles/avbArticles.js";
import advancedResults from "../../middleware/advancedResults.js";
import AVBArticles from '../../models/bases/AVB/Article.js'
const router = express.Router();

router.route("/")
.get(advancedResults(AVBArticles), getAvbArticles)
// .get(getAvbArticles);

router.route("/:id").get(getAvbArticle);

export default router;
