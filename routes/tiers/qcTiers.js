import express from "express";
import { getQcTier, getQcTiers } from "../../controllers/tiers/qcTiers.js";

const router = express.Router();

router.route("/").get(getQcTiers);

router.route("/:id").get(getQcTier);

export default router;
