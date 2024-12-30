import express from "express";
import {
  getVkpClients,
  getVkpClient,
} from "../../controllers/clients/vkpClients.js";

const router = express.Router();

router.route("/").get(getVkpClients);

router.route("/:id").get(getVkpClient);

export default router;
