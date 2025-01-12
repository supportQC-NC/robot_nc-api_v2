import express from "express";
import {
  getKoumacFactures,
  getKoumacFacture,
} from "../../controllers/factures/koumacFactures.js";


import advancedResults from "../../middleware/advancedResults.js";
import KOUMACFactures from '../../models/bases/KOUMAC/Facture.js'


const router = express.Router();

router.route("/")
.get(advancedResults(KOUMACFactures), getKoumacFactures)

router.route("/:id").get(getKoumacFacture);

export default router;
