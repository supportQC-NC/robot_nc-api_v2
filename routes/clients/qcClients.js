import express from "express";
import {
  getQcClients,
  getQcClient,
} from "../../controllers/clients/qcClients.js";

import advancedResults from "../../middleware/advancedResults.js";
import QCClients from '../../models/bases/QC/Client.js'

const router = express.Router();

router.route("/")
.get(advancedResults(QCClients), getQcClients)

router.route("/:id").get(getQcClient);

export default router;
