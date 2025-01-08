import express from "express";
import {
  getKoneArticles,
  getKoneArticle,
} from "../../controllers/articles/koneArticles.js";
import advancedResults from "../../middleware/advancedResults.js";
import KONEArticles from '../../models/bases/KONE/Article.js'
const router = express.Router();

router.route("/")
.get(advancedResults(KONEArticles), getKoneArticles)

router.route("/:id").get(getKoneArticle);

export default router;
