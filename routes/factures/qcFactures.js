import express from "express";
import {
  getQcFactures,
  getQcFacture,
} from "../../controllers/factures/qcFactures.js";

import advancedResults from "../../middleware/advancedResults.js";
import QCFactures from '../../models/bases/QC/Facture.js'

const router = express.Router();

router.route("/")
.get(advancedResults(QCFactures), getQcFactures)

router.route("/:id").get(getQcFacture);

export default router;
