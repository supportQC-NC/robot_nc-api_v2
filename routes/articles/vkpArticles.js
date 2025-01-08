import express from "express";
import {
  getVkpArticles,
  getVkpArticle,
} from "../../controllers/articles/vkpArticles.js";

import advancedResults from "../../middleware/advancedResults.js";
import VKPArticles from '../../models/bases/VKP/Article.js'


const router = express.Router();

router.route("/")
.get(advancedResults(VKPArticles), getVkpArticles)

router.route("/:id").get(getVkpArticle);

export default router;
