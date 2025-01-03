import express from "express";
import { getLdTier, getLdTiers } from "../../controllers/tiers/ldTiers.js";

const router = express.Router();

router.route("/").get(getLdTiers);

router.route("/:id").get(getLdTier);

export default router;
