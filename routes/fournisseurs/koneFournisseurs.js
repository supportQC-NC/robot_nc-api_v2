import express from "express";
import {
  getKoneFournisseurs,
  getKoneFournisseur,
} from "../../controllers/fournisseurs/koneFournisseurs.js";

const router = express.Router();

router.route("/").get(getKoneFournisseurs);

router.route("/:id").get(getKoneFournisseur);



export default router;
