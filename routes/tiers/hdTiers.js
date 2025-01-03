import express from "express";
import { getHdTier, getHdTiers } from "../../controllers/tiers/hdTiers.js";

const router = express.Router();

router.route("/").get(getHdTiers);

router.route("/:id").get(getHdTier);

export default router;
