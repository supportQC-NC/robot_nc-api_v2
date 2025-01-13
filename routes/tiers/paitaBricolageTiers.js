import express from "express";
import { getPaitaBricolageTier, getPaitaBricolageTiers } from "../../controllers/tiers/paitaBricolageTiers.js";


import advancedResults from "../../middleware/advancedResults.js";
import paitaBricolageTiers from '../../models/bases/PAITA_BRICOLAGE/Tier.js'


const router = express.Router();

router.route("/")
.get(advancedResults(paitaBricolageTiers), getPaitaBricolageTiers)

router.route("/:id").get(getPaitaBricolageTier);

export default router;
