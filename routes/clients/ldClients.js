import express from "express";
import {
  getLdClients,
  getLdClient,
} from "../../controllers/clients/ldClients.js";

const router = express.Router();

router.route("/").get(getLdClients);

router.route("/:id").get(getLdClient);

export default router;
