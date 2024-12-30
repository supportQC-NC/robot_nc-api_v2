import express from "express";
import {
  getKoumacClients,
  getKoumacClient,
} from "../../controllers/clients/koumacClients.js";

const router = express.Router();

router.route("/").get(getKoumacClients);

router.route("/:id").get(getKoumacClient);

export default router;
