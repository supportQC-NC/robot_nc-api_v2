import express from "express";
import {
  getPaitaBricolageFactureDetails,
  getPaitaBricolageFactureDetail,
} from "../../controllers/factureDetails/paitaBricolageFactureDetails.js";


import advancedResults from "../../middleware/advancedResults.js";
import PAITA_BRICOLAGEFactureDetails from '../../models/bases/PAITA_BRICOLAGE/FactureDetail.js'

const router = express.Router();

router.route("/")
.get(advancedResults(PAITA_BRICOLAGEFactureDetails), getPaitaBricolageFactureDetails)

router.route("/:id").get(getPaitaBricolageFactureDetail);

export default router;
