import express from "express";
import {
  getHdFournisseurs,
  getHdFournisseur,
} from "../../controllers/fournisseurs/hdFournisseurs.js";

const router = express.Router();

router.route("/").get(getHdFournisseurs);

router.route("/:id").get(getHdFournisseur);

export default router;
