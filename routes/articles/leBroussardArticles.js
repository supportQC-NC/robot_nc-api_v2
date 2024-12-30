import express from "express";
import {
  getLeBroussardArticles,
  getLeBroussardArticle,
} from "../../controllers/articles/leBroussardArticles.js";

const router = express.Router();

router.route("/").get(getLeBroussardArticles);

router.route("/:id").get(getLeBroussardArticle);

export default router;
