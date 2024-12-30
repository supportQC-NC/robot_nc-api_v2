import express from "express";
import {
  getFmbArticles,
  getFmbArticle,
} from "../../controllers/articles/fmbArticles.js"

const router = express.Router();

router.route("/").get(getFmbArticles);

router.route("/:id").get(getFmbArticle);

export default router;
