import express from "express";
import {
  getFmbClients,
  getFmbClient,
} from "../../controllers/clients/fmbClients.js";

const router = express.Router();

router.route("/").get(getFmbClients);

router.route("/:id").get(getFmbClient);

export default router;
