import express from "express";
import {
  getFmbArticles,
  getFmbArticle,
} from "../../controllers/articles/fmbArticles.js"
import advancedResults from "../../middleware/advancedResults.js";
import FMBArticles from '../../models/bases/FMB/Article.js'
const router = express.Router();

router.route("/")
.get(advancedResults(FMBArticles), getFmbArticles)

router.route("/:id").get(getFmbArticle);

export default router;
