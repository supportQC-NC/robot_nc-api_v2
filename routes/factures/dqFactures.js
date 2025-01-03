import express from "express";
import {
  getDqFactures,
  getDqFacture,
} from "../../controllers/factures/dqFactures.js";

const router = express.Router();

router.route("/").get(getDqFactures);

router.route("/:id").get(getDqFacture);

export default router;
