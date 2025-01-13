import express from "express";
import {
  getLdFactureDetails,
  getLdFactureDetail,
} from "../../controllers/factureDetails/ldFactureDetails.js";


import advancedResults from "../../middleware/advancedResults.js";
import LDFactureDetails from '../../models/bases/LD/FactureDetail.js'

const router = express.Router();

router.route("/")
.get(advancedResults(LDFactureDetails), getLdFactureDetails)

router.route("/:id").get(getLdFactureDetail);

export default router;
