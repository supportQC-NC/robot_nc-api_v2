import express from "express";
import {
  getHdClients,
  getHdClient,
} from "../../controllers/clients/hdClients.js";

import advancedResults from "../../middleware/advancedResults.js";
import HDClients from '../../models/bases/HD/Client.js'

const router = express.Router();

router.route("/")
.get(advancedResults(HDClients), getHdClients)

router.route("/:id").get(getHdClient);

export default router;
