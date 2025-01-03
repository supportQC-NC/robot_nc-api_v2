import express from "express";
import {
  getDqFournisseurs,
  getDqFournisseur,
} from "../../controllers/fournisseurs/dqFournisseurs.js";

const router = express.Router();

router.route("/").get(getDqFournisseurs);

router.route("/:id").get(getDqFournisseur);

export default router;
