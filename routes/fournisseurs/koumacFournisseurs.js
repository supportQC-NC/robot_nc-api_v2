import express from "express";
import {
  getKoumacFournisseurs,
  getKoumacFournisseur
} from "../../controllers/fournisseurs/koumacFournisseurs.js"

const router = express.Router();

router.route("/").get(getKoumacFournisseurs)


router.route("/:id").get(getKoumacFournisseur)



export default router;
