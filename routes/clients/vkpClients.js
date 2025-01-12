import express from "express";
import {
  getVkpClients,
  getVkpClient,
} from "../../controllers/clients/vkpClients.js";


import advancedResults from "../../middleware/advancedResults.js";
import VKPClients from '../../models/bases/VKP/Client.js'
const router = express.Router();

router.route("/")
.get(advancedResults(VKPClients), getVkpClients)

router.route("/:id").get(getVkpClient);

export default router;
