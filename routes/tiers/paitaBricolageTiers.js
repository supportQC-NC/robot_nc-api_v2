import express from "express";
import { getPaitaBricolageTier, getPaitaBricolageTiers } from "../../controllers/tiers/paitaBricolageTiers.js";

const router = express.Router();

router.route("/").get(getPaitaBricolageTiers);

router.route("/:id").get(getPaitaBricolageTier);

export default router;
