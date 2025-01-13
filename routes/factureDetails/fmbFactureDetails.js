import express from "express";
import {
  getFmbFactureDetails,
  getFmbFactureDetail,
} from "../../controllers/factureDetails/fmbFactureDetails.js";


import advancedResults from "../../middleware/advancedResults.js";
import FMBFactureDetails from '../../models/bases/FMB/FactureDetail.js'

const router = express.Router();

router.route("/")
.get(advancedResults(FMBFactureDetails), getFmbFactureDetails)

router.route("/:id").get(getFmbFactureDetail);

export default router;
