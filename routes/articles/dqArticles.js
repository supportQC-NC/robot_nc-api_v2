import express from "express";
import {
  getDqArticles,
  getDqArticle,
} from "../../controllers/articles/dqArticles.js";

import DQArticles from '../../models/bases/DQ/Article.js'
import advancedResults from "../../middleware/advancedResults.js";

const router = express.Router();

router.route("/")
.get(advancedResults(DQArticles), getDqArticles)

router.route("/:id").get(getDqArticle);

export default router;
