import express from "express";
import {
  getAvbFactureDetails,
  getAvbFactureDetail,
} from "../../controllers/factureDetails/avbFactureDetails.js";


import advancedResults from "../../middleware/advancedResults.js";
import AVBFactureDetails from '../../models/bases/AVB/FactureDetail.js'


const router = express.Router();

router.route("/")
.get(advancedResults(AVBFactureDetails), getAvbFactureDetails)

router.route("/:id").get(getAvbFactureDetail);

export default router;
