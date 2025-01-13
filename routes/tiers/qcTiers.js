import express from "express";
import { getQcTier, getQcTiers } from "../../controllers/tiers/qcTiers.js";

import advancedResults from "../../middleware/advancedResults.js";
import qcTiers from '../../models/bases/QC/Tier.js'

const router = express.Router();

router.route("/")
.get(advancedResults(qcTiers), getQcTiers)

router.route("/:id").get(getQcTier);

export default router;
