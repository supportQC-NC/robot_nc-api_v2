import express from "express";
import { getVkpTier, getVkpTiers } from "../../controllers/tiers/vkpTiers.js";

const router = express.Router();

import advancedResults from "../../middleware/advancedResults.js";
import vkpTiers from '../../models/bases/VKP/Tier.js'

router.route("/")
.get(advancedResults(vkpTiers), getVkpTiers)

router.route("/:id").get(getVkpTier);

export default router;
