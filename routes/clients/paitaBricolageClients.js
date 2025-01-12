import express from "express";
import {
  getPaitaBricolageClients,
  getPaitaBricolageClient,
} from "../../controllers/clients/paitaBricolageClients.js";


import advancedResults from "../../middleware/advancedResults.js";
import PAITA_BRICOLAGEClients from '../../models/bases/PAITA_BRICOLAGE/Client.js'

const router = express.Router();

router.route("/")
.get(advancedResults(PAITA_BRICOLAGEClients), getPaitaBricolageClients)

router.route("/:id").get(getPaitaBricolageClient);

export default router;
