import express from "express";
import {
  getLdArticles,
  getLdArticle,
} from "../../controllers/articles/ldArticles.js";

import advancedResults from "../../middleware/advancedResults.js";
import LDArticles from '../../models/bases/LD/Article.js'

const router = express.Router();

router.route("/")
.get(advancedResults(LDArticles), getLdArticles)

router.route("/:id").get(getLdArticle);

export default router;
