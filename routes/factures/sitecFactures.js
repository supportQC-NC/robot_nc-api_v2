import express from "express";
import {
  getSitecFactures,
  getSitecFacture,
} from "../../controllers/factures/sitecFactures.js";

import advancedResults from "../../middleware/advancedResults.js";
import SITECFactures from '../../models/bases/SITEC/Facture.js'


const router = express.Router();

router.route("/")
.get(advancedResults(SITECFactures), getSitecFactures)


router.route("/:id").get(getSitecFacture);

export default router;
