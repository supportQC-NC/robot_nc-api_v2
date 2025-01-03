import express from "express";
import { getKoneTier, getKoneTiers } from "../../controllers/tiers/koneTiers.js";

const router = express.Router();

router.route("/").get(getKoneTiers);

router.route("/:id").get(getKoneTier);

export default router;
