import express from "express";
import {
  getKoneFactureDetails,
  getKoneFactureDetail,
} from "../../controllers/factureDetails/koneFactureDetails.js";


import advancedResults from "../../middleware/advancedResults.js";
import KONEFactureDetails from '../../models/bases/KONE/FactureDetail.js'
const router = express.Router();

router.route("/")
.get(advancedResults(KONEFactureDetails), getKoneFactureDetails)

router.route("/:id").get(getKoneFactureDetail);

export default router;
