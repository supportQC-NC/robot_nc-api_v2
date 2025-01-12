import express from "express";
import {
  getLeBroussardClients,
  getLeBroussardClient,
} from "../../controllers/clients/leBroussardClients.js";

import advancedResults from "../../middleware/advancedResults.js";
import LE_BROUSSARDClients from '../../models/bases/LE_BROUSSARD/Article.js'

const router = express.Router();

router.route("/")
.get(advancedResults(LE_BROUSSARDClients), getLeBroussardClients)

router.route("/:id").get(getLeBroussardClient);

export default router;
