import express from "express";
import {
  getLeBroussardClients,
  getLeBroussardClient,
} from "../../controllers/clients/leBroussardClients.js";

const router = express.Router();

router.route("/").get(getLeBroussardClients);

router.route("/:id").get(getLeBroussardClient);

export default router;
