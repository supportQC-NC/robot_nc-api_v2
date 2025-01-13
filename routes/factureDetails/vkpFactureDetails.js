import express from "express";
import {
  getVkpFactureDetails,
  getVkpFactureDetail,
} from "../../controllers/factureDetails/vkpFactureDetails.js";

import advancedResults from "../../middleware/advancedResults.js";
import VKPFactureDetails from '../../models/bases/VKP/FactureDetail.js'


const router = express.Router();

router.route("/")
.get(advancedResults(VKPFactureDetails), getVkpFactureDetails)


router.route("/:id").get(getVkpFactureDetail);

export default router;
