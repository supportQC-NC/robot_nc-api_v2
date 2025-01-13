import express from "express";
import { getDqTier, getDqTiers } from "../../controllers/tiers/dqTiers.js";


import advancedResults from "../../middleware/advancedResults.js";
import dqTiers from '../../models/bases/DQ/Tier.js'
const router = express.Router();

router.route("/")
.get(advancedResults(dqTiers), getDqTiers)

router.route("/:id").get(getDqTier);

export default router;
