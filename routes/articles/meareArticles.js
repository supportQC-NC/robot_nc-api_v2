import express from "express";
import {
  getMeareArticles,
  getMeareArticle,
} from "../../controllers/articles/meareArticles.js";

import advancedResults from "../../middleware/advancedResults.js";
import MEAREArticles from '../../models/bases/MEARE/Article.js'

const router = express.Router();

router.route("/")
.get(advancedResults(MEAREArticles), getMeareArticles)

router.route("/:id").get(getMeareArticle);

export default router;
