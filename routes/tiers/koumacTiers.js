import express from "express";
import { getKoumacTier, getKoumacTiers } from "../../controllers/tiers/koumacTiers.js";

const router = express.Router();

router.route("/").get(getKoumacTiers);

router.route("/:id").get(getKoumacTier);

export default router;
