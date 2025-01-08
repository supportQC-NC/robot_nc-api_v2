import express from "express";
import {
  getKoumacArticles,
  getKoumacArticle,
} from "../../controllers/articles/koumacArticles.js";
import advancedResults from "../../middleware/advancedResults.js";
import KOUMACArticles from '../../models/bases/KOUMAC/Article.js'
const router = express.Router();

router.route("/")
.get(advancedResults(KOUMACArticles), getKoumacArticles)

router.route("/:id").get(getKoumacArticle);

export default router;
