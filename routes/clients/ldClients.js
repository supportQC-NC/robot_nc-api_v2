import express from "express";
import {
  getLdClients,
  getLdClient,
} from "../../controllers/clients/ldClients.js";

import advancedResults from "../../middleware/advancedResults.js";
import LDClients from '../../models/bases/LD/Client.js'

const router = express.Router();

router.route("/")
.get(advancedResults(LDClients), getLdClients)

router.route("/:id").get(getLdClient);

export default router;
