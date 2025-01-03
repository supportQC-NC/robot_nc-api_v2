import express from "express";
import {
  getKoneFactures,
  getKoneFacture,
} from "../../controllers/factures/koneFactures.js";

const router = express.Router();

router.route("/").get(getKoneFactures);

router.route("/:id").get(getKoneFacture);

export default router;
