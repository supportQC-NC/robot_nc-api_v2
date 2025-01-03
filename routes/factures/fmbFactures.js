import express from "express";
import {
  getFmbFactures,
  getFmbFacture,
} from "../../controllers/factures/fmbFactures.js";

const router = express.Router();

router.route("/").get(getFmbFactures);

router.route("/:id").get(getFmbFacture);

export default router;
