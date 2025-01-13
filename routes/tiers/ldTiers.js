import express from "express";
import { getLdTier, getLdTiers } from "../../controllers/tiers/ldTiers.js";



import advancedResults from "../../middleware/advancedResults.js";
import ldTiers from '../../models/bases/LD/Tier.js'
const router = express.Router();

router.route("/")
.get(advancedResults(ldTiers), getLdTiers)

router.route("/:id").get(getLdTier);

export default router;
