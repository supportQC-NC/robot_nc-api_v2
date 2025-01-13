import express from "express";
import { getKoumacTier, getKoumacTiers } from "../../controllers/tiers/koumacTiers.js";


import advancedResults from "../../middleware/advancedResults.js";
import koumacTiers from '../../models/bases/KOUMAC/Tier.js'
const router = express.Router();

router.route("/")
.get(advancedResults(koumacTiers), getKoumacTiers)

router.route("/:id").get(getKoumacTier);

export default router;
