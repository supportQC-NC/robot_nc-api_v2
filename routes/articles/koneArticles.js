import express from "express";
import {
  getKoneArticles,
  getKoneArticle,
} from "../../controllers/articles/koneArticles.js";

const router = express.Router();

router.route("/").get(getKoneArticles);

router.route("/:id").get(getKoneArticle);

export default router;
