import express from "express";
import {
  getDqArticles,
  getDqArticle,
} from "../../controllers/articles/dqArticles.js";

const router = express.Router();

router.route("/").get(getDqArticles);

router.route("/:id").get(getDqArticle);

export default router;
