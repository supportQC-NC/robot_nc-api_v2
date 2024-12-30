import express from "express";
import {
  getQcArticles,
  getQcArticle,
} from "../../controllers/articles/qcArticles.js";

const router = express.Router();

router.route("/").get(getQcArticles);

router.route("/:id").get(getQcArticle);

export default router;
