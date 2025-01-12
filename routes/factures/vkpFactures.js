import express from "express";
import {
  getVkpFactures,
  getVkpFacture,
} from "../../controllers/factures/vkpFactures.js";

import advancedResults from "../../middleware/advancedResults.js";
import VKPFactures from '../../models/bases/VKP/Facture.js'

const router = express.Router();

router.route("/")
.get(advancedResults(VKPFactures), getVkpFactures)

router.route("/:id").get(getVkpFacture);

export default router;
