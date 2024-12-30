import express from "express";
import {
  getSitecArticles,
  getSitecArticle,
} from "../../controllers/articles/sitecArticles.js";

const router = express.Router();

router.route("/").get(getSitecArticles);

router.route("/:id").get(getSitecArticle);

export default router;
