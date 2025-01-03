import express from "express";
import { getSitecTier, getSitecTiers } from "../../controllers/tiers/sitecTiers.js";

const router = express.Router();

router.route("/").get(getSitecTiers);

router.route("/:id").get(getSitecTier);

export default router;
