import express from "express";
import {
  getKoumacClients,
  getKoumacClient,
} from "../../controllers/clients/koumacClients.js";

import advancedResults from "../../middleware/advancedResults.js";
import KOUMACClients from '../../models/bases/KOUMAC/Client.js'

const router = express.Router();

router.route("/")
.get(advancedResults(KOUMACClients), getKoumacClients)

router.route("/:id").get(getKoumacClient);

export default router;
