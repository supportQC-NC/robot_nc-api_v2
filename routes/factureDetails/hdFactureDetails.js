import express from "express";
import {
  getHdFactureDetails,
  getHdFactureDetail,
} from "../../controllers/factureDetails/hdFactureDetails.js";


import advancedResults from "../../middleware/advancedResults.js";
import HDFactureDetails from '../../models/bases/HD/FactureDetail.js'

const router = express.Router();

router.route("/")
.get(advancedResults(HDFactureDetails), getHdFactureDetails)

router.route("/:id").get(getHdFactureDetail);

export default router;
