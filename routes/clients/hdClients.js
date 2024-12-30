import express from "express";
import {
  getHdClients,
  getHdClient,
} from "../../controllers/clients/hdClients.js";

const router = express.Router();

router.route("/").get(getHdClients);

router.route("/:id").get(getHdClient);

export default router;
