import express from "express";
import {
  getDqClients,
  getDqClient,
} from "../../controllers/clients/dqClients.js";
import advancedResults from "../../middleware/advancedResults.js";
import DQClients from '../../models/bases/DQ/Client.js'

const router = express.Router();

router.route("/")
.get(advancedResults(DQClients), getDqClients)

router.route("/:id").get(getDqClient);

export default router;
