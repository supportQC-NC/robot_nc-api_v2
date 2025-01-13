import express from "express";
import { getSitecTier, getSitecTiers } from "../../controllers/tiers/sitecTiers.js";


import advancedResults from "../../middleware/advancedResults.js";
import sitecTiers from '../../models/bases/SITEC/Tier.js'

const router = express.Router();

router.route("/")
.get(advancedResults(sitecTiers), getSitecTiers)

router.route("/:id").get(getSitecTier);

export default router;
