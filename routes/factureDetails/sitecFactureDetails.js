import express from "express";
import {
  getSitecFactureDetails,
  getSitecFactureDetail,
} from "../../controllers/factureDetails/sitecFactureDetails.js";

import advancedResults from "../../middleware/advancedResults.js";
import SITECFactureDetails from '../../models/bases/SITEC/FactureDetail.js'


const router = express.Router();

router.route("/")
.get(advancedResults(SITECFactureDetails), getSitecFactureDetails)


router.route("/:id").get(getSitecFactureDetail);

export default router;
