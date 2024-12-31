import express from "express";
import {
  getAvbFournisseurs,
  getAvbFournisseur,
} from "../../controllers/fournisseurs/avbFournisseurs.js";

const router = express.Router();

router.route("/").get(getAvbFournisseurs);

router.route("/:id").get(getAvbFournisseur);

export default router;
