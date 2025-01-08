import express from "express";
import {
  getHdArticles,
  getHdArticle,
} from "../../controllers/articles/hdArticles.js";
import advancedResults from "../../middleware/advancedResults.js";
import HDArticles from '../../models/bases/HD/Article.js'

const router = express.Router();

router.route("/")
.get(advancedResults(HDArticles), getHdArticles)

router.route("/:id").get(getHdArticle);

export default router;
