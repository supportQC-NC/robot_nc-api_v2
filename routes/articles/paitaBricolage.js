import express from "express";
import {
  getPaitaBricolageArticles,
  getPaitaBricolageArticle,
} from "../../controllers/articles/paitaBricolage.js";

const router = express.Router();

router.route("/").get(getPaitaBricolageArticles);

router.route("/:id").get(getPaitaBricolageArticle);

export default router;
