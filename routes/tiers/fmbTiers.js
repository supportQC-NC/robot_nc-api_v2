import express from "express";
import { getFmbTier, getFmbTiers } from "../../controllers/tiers/fmbTiers.js";

const router = express.Router();

router.route("/").get(getFmbTiers);

router.route("/:id").get(getFmbTier);

export default router;
