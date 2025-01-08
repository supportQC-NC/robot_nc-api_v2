import express from "express";
import {
  getQcArticles,
  getQcArticle,
} from "../../controllers/articles/qcArticles.js";

import advancedResults from "../../middleware/advancedResults.js";
import QCArticles from '../../models/bases/QC/Article.js'

const router = express.Router();

router.route("/")
.get(advancedResults(QCArticles), getQcArticles)

router.route("/:id").get(getQcArticle);

export default router;
