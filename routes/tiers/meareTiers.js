import express from "express";
import { getMeareTier, getMeareTiers } from "../../controllers/tiers/meareTiers.js";

const router = express.Router();

router.route("/").get(getMeareTiers);

router.route("/:id").get(getMeareTier);

export default router;
