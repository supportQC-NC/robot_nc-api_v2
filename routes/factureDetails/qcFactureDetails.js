import express from "express";
import {
  getQcFactureDetails,
  getQcFactureDetail,
} from "../../controllers/factureDetails/qcFactureDetails.js";


import advancedResults from "../../middleware/advancedResults.js";
import QCFactureDetails from '../../models/bases/QC/FactureDetail.js'


const router = express.Router();

router.route("/")
.get(advancedResults(QCFactureDetails), getQcFactureDetails)


router.route("/:id").get(getQcFactureDetail);

export default router;
