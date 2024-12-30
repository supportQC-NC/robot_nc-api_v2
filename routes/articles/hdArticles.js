import express from "express";
import {
  getHdArticles,
  getHdArticle,
} from "../../controllers/articles/hdArticles.js";

const router = express.Router();

router.route("/").get(getHdArticles);

router.route("/:id").get(getHdArticle);

export default router;
