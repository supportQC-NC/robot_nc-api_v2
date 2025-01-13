import express from "express";
import {
  getDqFactureDetails,
  getDqFactureDetail,
} from "../../controllers/factureDetails/dqFactureDetails.js";

import advancedResults from "../../middleware/advancedResults.js";
import DQFactureDetails from '../../models/bases/DQ/FactureDetail.js'

const router = express.Router();

router.route("/")
.get(advancedResults(DQFactureDetails), getDqFactureDetails)

router.route("/:id").get(getDqFactureDetail);

export default router;
