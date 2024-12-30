import express from "express";
import {
  getVkpArticles,
  getVkpArticle,
} from "../../controllers/articles/vkpArticles.js";

const router = express.Router();

router.route("/").get(getVkpArticles);

router.route("/:id").get(getVkpArticle);

export default router;
