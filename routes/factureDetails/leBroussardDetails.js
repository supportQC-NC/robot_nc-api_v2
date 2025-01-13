import express from "express";
import {
  getLeBroussardFactureDetails,
  getLeBroussardFactureDetail,
} from "../../controllers/factureDetails/leBroussardFactureDetails.js";


import advancedResults from "../../middleware/advancedResults.js";
import LE_BROUSSARDFactureDetails from '../../models/bases/LE_BROUSSARD/FactureDetail.js'


const router = express.Router();

router.route("/")
.get(advancedResults(LE_BROUSSARDFactureDetails), getLeBroussardFactureDetails)

router.route("/:id").get(getLeBroussardFactureDetail);

export default router;
