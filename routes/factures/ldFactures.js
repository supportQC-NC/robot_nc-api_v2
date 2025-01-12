import express from "express";
import {
  getLdFactures,
  getLdFacture,
} from "../../controllers/factures/ldFactures.js";


import advancedResults from "../../middleware/advancedResults.js";
import LDFactures from '../../models/bases/LD/Facture.js'


const router = express.Router();

router.route("/")
.get(advancedResults(LDFactures), getLdFactures)

router.route("/:id").get(getLdFacture);

export default router;
