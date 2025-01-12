import express from "express";
import {
  getMeareFactures,
  getMeareFacture,
} from "../../controllers/factures/meareFactures.js";


import advancedResults from "../../middleware/advancedResults.js";
import MEAREFactures from '../../models/bases/MEARE/Facture.js'
const router = express.Router();

router.route("/")
.get(advancedResults(MEAREFactures), getMeareFactures)

router.route("/:id").get(getMeareFacture);

export default router;
