import express from "express";
import {
  getLdArticles,
  getLdArticle,
} from "../../controllers/articles/ldArticles.js";

const router = express.Router();

router.route("/").get(getLdArticles);

router.route("/:id").get(getLdArticle);

export default router;
