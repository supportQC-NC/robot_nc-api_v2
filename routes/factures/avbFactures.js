import express from "express";
import {
  getAvbFactures,
  getAvbFacture,
} from "../../controllers/factures/avbFactures.js";

import advancedResults from "../../middleware/advancedResults.js";
import AVBFactures from '../../models/bases/AVB/Facture.js'

const router = express.Router();

router.route("/")
.get(advancedResults(AVBFactures), getAvbFactures)

router.route("/:id").get(getAvbFacture);

export default router;
