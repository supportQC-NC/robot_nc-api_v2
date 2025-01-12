import express from "express";
import {
  getLeBroussardFactures,
  getLeBroussardFacture,
} from "../../controllers/factures/leBroussardFactures.js";

import advancedResults from "../../middleware/advancedResults.js";
import LE_BROUSSARDFactures from '../../models/bases/LE_BROUSSARD/Facture.js'

const router = express.Router();



router.route("/")
.get(advancedResults(LE_BROUSSARDFactures), getLeBroussardFactures)

router.route("/:id").get(getLeBroussardFacture);

export default router;
