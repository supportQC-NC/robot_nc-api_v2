import express from "express";
import {
  getKoumacArticles,
  getKoumacArticle,
} from "../../controllers/articles/koumacArticles.js";

const router = express.Router();

router.route("/").get(getKoumacArticles);

router.route("/:id").get(getKoumacArticle);

export default router;
