import express from "express";
import {
  getAvbClients,
  getAvbClient,
} from "../../controllers/clients/avbClients.js";

const router = express.Router();

router.route("/").get(getAvbClients);

router.route("/:id").get(getAvbClient);

export default router;
