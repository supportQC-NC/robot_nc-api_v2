import express from "express";
import { getFmbTier, getFmbTiers } from "../../controllers/tiers/fmbTiers.js";




import advancedResults from "../../middleware/advancedResults.js";
import fmbTiers from '../../models/bases/FMB/Tier.js'
const router = express.Router();

router.route("/")
.get(advancedResults(fmbTiers), getFmbTiers)

router.route("/:id").get(getFmbTier);

export default router;
