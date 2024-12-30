import express from "express";
import {
  getAvbArticles,
  getAvbArticle,
} from "../../controllers/articles/avbArticles.js";

const router = express.Router();

router.route("/").get(getAvbArticles);

router.route("/:id").get(getAvbArticle);

export default router;
