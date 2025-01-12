import express from "express";
import {
  getAvbClients,
  getAvbClient,
} from "../../controllers/clients/avbClients.js";
import advancedResults from "../../middleware/advancedResults.js";
import AVBClients from '../../models/bases/AVB/Client.js'
const router = express.Router();

router.route("/")
.get(advancedResults(AVBClients), getAvbClients)

router.route("/:id").get(getAvbClient);

export default router;
