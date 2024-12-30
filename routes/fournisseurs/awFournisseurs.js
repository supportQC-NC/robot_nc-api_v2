import express from "express";
import {
  getAwFournisseurs,
  getAwFournisseur,
} from "../../controllers/fournisseurs/awFournisseurs.js";

const router = express.Router();

router.route("/").get(getAwFournisseurs);

router.route("/:id").get(getAwFournisseur);

export default router;
