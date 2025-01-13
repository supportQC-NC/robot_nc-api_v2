import express from "express";
import {
  getKoumacFactureDetails,
  getKoumacFactureDetail,
} from "../../controllers/factureDetails/koumacFactureDetails.js";

import advancedResults from "../../middleware/advancedResults.js";
import KOUMACFactureDetails from '../../models/bases/KOUMAC/FactureDetail.js'

const router = express.Router();

router.route("/")
.get(advancedResults(KOUMACFactureDetails), getKoumacFactureDetails)

router.route("/:id").get(getKoumacFactureDetail);

export default router;
