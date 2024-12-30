import express from "express";
import {
  getQcClients,
  getQcClient,
} from "../../controllers/clients/qcClients.js";

const router = express.Router();

router.route("/").get(getQcClients);

router.route("/:id").get(getQcClient);

export default router;
