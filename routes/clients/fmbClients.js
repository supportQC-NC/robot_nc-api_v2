import express from "express";
import {
  getFmbClients,
  getFmbClient,
} from "../../controllers/clients/fmbClients.js";

import advancedResults from "../../middleware/advancedResults.js";
import FMBClients from '../../models/bases/FMB/Client.js'

const router = express.Router();

router.route("/")
.get(advancedResults(FMBClients), getFmbClients)

router.route("/:id").get(getFmbClient);

export default router;
