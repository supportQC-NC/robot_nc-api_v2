import express from "express";
import {
  getKoneClients,
  getKoneClient,
} from "../../controllers/clients/koneClients.js";

import advancedResults from "../../middleware/advancedResults.js";
import KONEClients from '../../models/bases/KONE/Client.js'


const router = express.Router();

router.route("/")
.get(advancedResults(KONEClients), getKoneClients)

router.route("/:id").get(getKoneClient);

export default router;
