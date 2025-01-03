import express from "express";
import { getDqTier, getDqTiers } from "../../controllers/tiers/dqTiers.js";

const router = express.Router();

router.route("/").get(getDqTiers);

router.route("/:id").get(getDqTier);

export default router;
