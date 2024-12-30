import express from "express";
import {
  getPaitaBricolageClients,
  getPaitaBricolageClient,
} from "../../controllers/clients/paitaBricolageClients.js";

const router = express.Router();

router.route("/").get(getPaitaBricolageClients);

router.route("/:id").get(getPaitaBricolageClient);

export default router;
