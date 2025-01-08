import express from "express";
import {
  getAwArticles,
  getAwArticle,
} from "../../controllers/articles/awArticles.js";


import AWArticles from '../../models/bases/AW/Article.js'
import advancedResults from "../../middleware/advancedResults.js";
const router = express.Router();

router.route("/")
.get(advancedResults(AWArticles), getAwArticles)

router.route("/:id").get(getAwArticle);

export default router;
