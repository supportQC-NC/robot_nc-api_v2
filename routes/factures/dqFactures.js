import express from "express";
import {
  getDqFactures,
  getDqFacture,
} from "../../controllers/factures/dqFactures.js";


import advancedResults from "../../middleware/advancedResults.js";
import DQFactures from '../../models/bases/DQ/Facture.js'


const router = express.Router();

router.route("/")
.get(advancedResults(DQFactures), getDqFactures)

router.route("/:id").get(getDqFacture);

export default router;
