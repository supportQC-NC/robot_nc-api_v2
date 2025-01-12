import express from "express";
import {
  getHdFactures,
  getHdFacture,
} from "../../controllers/factures/hdFactures.js";


import advancedResults from "../../middleware/advancedResults.js";
import HDFactures from '../../models/bases/HD/Facture.js'
const router = express.Router();

router.route("/")
.get(advancedResults(HDFactures), getHdFactures)

router.route("/:id").get(getHdFacture);

export default router;
