import express from "express";
import {
  getDqClients,
  getDqClient,
} from "../../controllers/clients/dqClients.js";

const router = express.Router();

router.route("/").get(getDqClients);

router.route("/:id").get(getDqClient);

export default router;
