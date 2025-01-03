import express from "express";
import { getVkpTier, getVkpTiers } from "../../controllers/tiers/vkpTiers.js";

const router = express.Router();

router.route("/").get(getVkpTiers);

router.route("/:id").get(getVkpTier);

export default router;
