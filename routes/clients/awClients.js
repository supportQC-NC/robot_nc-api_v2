import express from "express";
import {
  getAwClients,
  getAwClient,
} from "../../controllers/clients/awClients.js";

const router = express.Router();

router.route("/").get(getAwClients);

router.route("/:id").get(getAwClient);

export default router;
