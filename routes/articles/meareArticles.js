import express from "express";
import {
  getMeareArticles,
  getMeareArticle,
} from "../../controllers/articles/meareArticles.js";

const router = express.Router();

router.route("/").get(getMeareArticles);

router.route("/:id").get(getMeareArticle);

export default router;
