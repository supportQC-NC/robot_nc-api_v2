import express from "express";
import {
  getVkpFactures,
  getVkpFacture,
} from "../../controllers/factures/vkpFactures.js";

const router = express.Router();

router.route("/").get(getVkpFactures);

router.route("/:id").get(getVkpFacture);

export default router;
