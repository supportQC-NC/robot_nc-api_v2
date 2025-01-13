import express from "express";
import { getLeBroussardTier, getLeBroussardTiers } from "../../controllers/tiers/leBroussardTiers.js";



import advancedResults from "../../middleware/advancedResults.js";
import LeBroussardTiers from '../../models/bases/LE_BROUSSARD/Tier.js'


const router = express.Router();

router.route("/")
.get(advancedResults(LeBroussardTiers), getLeBroussardTiers)

router.route("/:id").get(getLeBroussardTier);

export default router;
