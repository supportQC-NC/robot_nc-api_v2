import express from "express";
import { getAvbTier, getAvbTiers } from "../../controllers/tiers/avbTiers.js";

const router = express.Router();

router.route("/").get(getAvbTiers);

router.route("/:id").get(getAvbTier);

export default router;
