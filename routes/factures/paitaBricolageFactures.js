import express from "express";
import {
  getPaitaBricolageFactures,
  getPaitaBricolageFacture,
} from "../../controllers/factures/paitaBricolage.js";



import advancedResults from "../../middleware/advancedResults.js";
import PAITAFactures from '../../models/bases/PAITA_BRICOLAGE/Facture.js'


const router = express.Router();

router.route("/")
.get(advancedResults(PAITAFactures), getPaitaBricolageFactures)

router.route("/:id").get(getPaitaBricolageFacture);

export default router;
