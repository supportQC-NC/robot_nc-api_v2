import express from "express";
import {
  getFmbFournisseurs,
  getFmbFournisseur,
} from "../../controllers/fournisseurs/fmbFournisseurs.js";

const router = express.Router();

router.route("/").get(getFmbFournisseurs);

router.route("/:id").get(getFmbFournisseur);

export default router;
