import express from "express";
import {
  getMeareClients,
  getMeareClient,
} from "../../controllers/clients/meareClients.js";


import advancedResults from "../../middleware/advancedResults.js";
import MEAREClients from '../../models/bases/MEARE/Client.js'

const router = express.Router();

router.route("/")
.get(advancedResults(MEAREClients), getMeareClients)

router.route("/:id").get(getMeareClient);

export default router;
