import express from "express";
import {
  getVkpFournisseurs,
  getVkpFournisseur
} from "../../controllers/fournisseurs/vkpFournisseurs.js"

const router = express.Router();

router.route("/").get(getVkpFournisseurs)


router.route("/:id").get(getVkpFournisseur)




export default router;
