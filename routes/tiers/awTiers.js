import express from "express";
import { getAwTier, getAwTiers } from "../../controllers/tiers/awTiers.js";

const router = express.Router();

router.route("/").get(getAwTiers);

router.route("/:id").get(getAwTier);

export default router;
