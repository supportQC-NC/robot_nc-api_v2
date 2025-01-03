import express from "express";
import {
  getQcFactures,
  getQcFacture,
} from "../../controllers/factures/qcFactures.js";

const router = express.Router();

router.route("/").get(getQcFactures);

router.route("/:id").get(getQcFacture);

export default router;
