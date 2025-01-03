import express from "express";
import {
  getSitecFournisseurs,
  getSitecFournisseur
} from "../../controllers/fournisseurs/sitecFournisseurs.js"

const router = express.Router();

router.route("/").get(getSitecFournisseurs)


router.route("/:id").get(getSitecFournisseur)




export default router;
