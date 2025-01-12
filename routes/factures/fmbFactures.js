import express from "express";
import {
  getFmbFactures,
  getFmbFacture,
} from "../../controllers/factures/fmbFactures.js";

import advancedResults from "../../middleware/advancedResults.js";
import FMBFactures from '../../models/bases/FMB/Facture.js'
const router = express.Router();

router.route("/")
.get(advancedResults(FMBFactures), getFmbFactures)

router.route("/:id").get(getFmbFacture);

export default router;
