import express from "express";
import { getAvbTier, getAvbTiers } from "../../controllers/tiers/avbTiers.js";



import advancedResults from "../../middleware/advancedResults.js";
import avbTiers from '../../models/bases/AVB/Tier.js'

const router = express.Router();

router.route("/")
.get(advancedResults(avbTiers), getAvbTiers)

router.route("/:id").get(getAvbTier);

export default router;
