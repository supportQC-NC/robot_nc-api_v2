import express from "express";
import {
  getPaitaBricolageArticles,
  getPaitaBricolageArticle,
} from "../../controllers/articles/paitaBricolage.js";
import advancedResults from "../../middleware/advancedResults.js";
import PAITA_BRICOLAGEArticles from '../../models/bases/PAITA_BRICOLAGE/Article.js'

const router = express.Router();

router.route("/")
.get(advancedResults(PAITA_BRICOLAGEArticles), getPaitaBricolageArticles)

router.route("/:id").get(getPaitaBricolageArticle);

export default router;
