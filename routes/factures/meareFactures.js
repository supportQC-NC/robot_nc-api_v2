import express from "express";
import {
  getMeareFactures,
  getMeareFacture,
} from "../../controllers/factures/meareFactures.js";

const router = express.Router();

router.route("/").get(getMeareFactures);

router.route("/:id").get(getMeareFacture);

export default router;
