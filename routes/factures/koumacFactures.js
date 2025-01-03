import express from "express";
import {
  getKoumacFactures,
  getKoumacFacture,
} from "../../controllers/factures/koumacFactures.js";

const router = express.Router();

router.route("/").get(getKoumacFactures);

router.route("/:id").get(getKoumacFacture);

export default router;
