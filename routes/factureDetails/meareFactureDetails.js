import express from "express";
import {
  getMeareFactureDetails,
  getMeareFactureDetail,
} from "../../controllers/factureDetails/meareFactureDetails.js";


import advancedResults from "../../middleware/advancedResults.js";
import MAREFactureDetails from '../../models/bases/MEARE/FactureDetail.js'
const router = express.Router();

router.route("/")
.get(advancedResults(MAREFactureDetails), getMeareFactureDetails)

router.route("/:id").get(getMeareFactureDetail);

export default router;
