import express from "express";
import {
  getAwFactureDetails,
  getAwFactureDetail,
} from "../../controllers/factureDetails/awFactureDetails.js";

import advancedResults from "../../middleware/advancedResults.js";
import AWFactureDetails from '../../models/bases/AW/FactureDetail.js'

const router = express.Router();

router.route("/")
.get(advancedResults(AWFactureDetails), getAwFactureDetails)

router.route("/:id").get(getAwFactureDetail);

export default router;
