import express from "express";
import { getMeareTier, getMeareTiers } from "../../controllers/tiers/meareTiers.js";


import advancedResults from "../../middleware/advancedResults.js";
import meareTiers from '../../models/bases/MEARE/Tier.js'
const router = express.Router();

router.route("/")
.get(advancedResults(meareTiers), getMeareTiers)

router.route("/:id").get(getMeareTier);

export default router;
