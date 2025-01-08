import express from "express";
import {
  getLeBroussardArticles,
  getLeBroussardArticle,
} from "../../controllers/articles/leBroussardArticles.js";

import advancedResults from "../../middleware/advancedResults.js";
import LE_BROUSSARDArticles from '../../models/bases/LE_BROUSSARD/Article.js'

const router = express.Router();

router.route("/")
.get(advancedResults(LE_BROUSSARDArticles), getLeBroussardArticles)

router.route("/:id").get(getLeBroussardArticle);

export default router;
