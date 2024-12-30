import express from "express";
import {
  getMeareClients,
  getMeareClient,
} from "../../controllers/clients/meareClients.js";

const router = express.Router();

router.route("/").get(getMeareClients);

router.route("/:id").get(getMeareClient);

export default router;
