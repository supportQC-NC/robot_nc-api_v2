import express from "express";
import {
  getSitecClients,
  getSitecClient,
} from "../../controllers/clients/sitecClients.js";

import advancedResults from "../../middleware/advancedResults.js";
import SITECClients from '../../models/bases/SITEC/Client.js'

const router = express.Router();

router.route("/")
.get(advancedResults(SITECClients), getSitecClients)

router.route("/:id").get(getSitecClient);

export default router;
