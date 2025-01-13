import express from "express";
import { getKoneTier, getKoneTiers } from "../../controllers/tiers/koneTiers.js";


import advancedResults from "../../middleware/advancedResults.js";
import koneTiers from '../../models/bases/KONE/Tier.js'
const router = express.Router();

router.route("/")
.get(advancedResults(koneTiers), getKoneTiers)

router.route("/:id").get(getKoneTier);

export default router;
