import express from "express";
import {
  getQcFournisseurs,
  getQcFournisseur
} from "../../controllers/fournisseurs/qcFournisseurs.js"

const router = express.Router();

router.route("/").get(getQcFournisseurs)


router.route("/:id").get(getQcFournisseur)




export default router;
