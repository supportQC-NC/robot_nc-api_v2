import express from "express";
import {
  getAwFactures,
  getAwFacture,
} from "../../controllers/factures/awFactures.js";

import advancedResults from "../../middleware/advancedResults.js";
import AWFactures from '../../models/bases/AW/Facture.js'

const router = express.Router();

router.route("/")
.get(advancedResults(AWFactures), getAwFactures)

router.route("/:id").get(getAwFacture);

export default router;
