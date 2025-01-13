import express from "express";
import { getHdTier, getHdTiers } from "../../controllers/tiers/hdTiers.js";


import advancedResults from "../../middleware/advancedResults.js";
import hdTiers from '../../models/bases/HD/Tier.js'


const router = express.Router();

router.route("/")
.get(advancedResults(hdTiers), getHdTiers)

router.route("/:id").get(getHdTier);

export default router;
