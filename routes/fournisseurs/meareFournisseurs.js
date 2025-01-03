import express from "express";
import {
  getMeareFournisseurs,
  getMeareFournisseur
} from "../../controllers/fournisseurs/meareFournisseurs.js"

const router = express.Router();

router.route("/").get(getMeareFournisseurs)


router.route("/:id").get(getMeareFournisseur)




export default router;
