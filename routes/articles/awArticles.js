import express from "express";
import {
  getAwArticles,
  getAwArticle,
} from "../../controllers/articles/awArticles.js";

const router = express.Router();

router.route("/").get(getAwArticles);

router.route("/:id").get(getAwArticle);

export default router;
