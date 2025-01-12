import express from "express";
import {
  getAwClients,
  getAwClient,
} from "../../controllers/clients/awClients.js";
import advancedResults from "../../middleware/advancedResults.js";
import AWClients from '../../models/bases/AW/Client.js'
const router = express.Router();

router.route("/")
.get(advancedResults(AWClients), getAwClients)

router.route("/:id").get(getAwClient);

export default router;
