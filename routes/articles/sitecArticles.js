import express from "express";
import {
  getSitecArticles,
  getSitecArticle,
} from "../../controllers/articles/sitecArticles.js";
import advancedResults from "../../middleware/advancedResults.js";
import SITECArticles from '../../models/bases/SITEC/Article.js'

const router = express.Router();

router.route("/")
.get(advancedResults(SITECArticles), getSitecArticles)

router.route("/:id").get(getSitecArticle);

export default router;
