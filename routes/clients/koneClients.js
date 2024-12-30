import express from "express";
import {
  getKoneClients,
  getKoneClient,
} from "../../controllers/clients/koneClients.js";

const router = express.Router();

router.route("/").get(getKoneClients);

router.route("/:id").get(getKoneClient);

export default router;
