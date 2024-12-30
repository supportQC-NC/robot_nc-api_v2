import express from "express";
import {
  getSitecClients,
  getSitecClient,
} from "../../controllers/clients/sitecClients.js";

const router = express.Router();

router.route("/").get(getSitecClients);

router.route("/:id").get(getSitecClient);

export default router;
