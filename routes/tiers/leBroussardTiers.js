import express from "express";
import { getLeBroussardTier, getLeBroussardTiers } from "../../controllers/tiers/leBroussardTiers.js";

const router = express.Router();

router.route("/").get(getLeBroussardTiers);

router.route("/:id").get(getLeBroussardTier);

export default router;
