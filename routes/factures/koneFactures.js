import express from "express";
import {
  getKoneFactures,
  getKoneFacture,
} from "../../controllers/factures/koneFactures.js";


import advancedResults from "../../middleware/advancedResults.js";
import KONEFactures from '../../models/bases/KONE/Facture.js'
const router = express.Router();

router.route("/")
.get(advancedResults(KONEFactures), getKoneFactures)

router.route("/:id").get(getKoneFacture);

export default router;
