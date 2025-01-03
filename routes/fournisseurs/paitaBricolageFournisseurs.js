import express from "express";
import {
  getPaitaBricolageFournisseurs,
  getPaitaBricolageFournisseur
} from "../../controllers/fournisseurs/paitaBricolageFournisseurs.js"

const router = express.Router();

router.route("/").get(getPaitaBricolageFournisseurs)


router.route("/:id").get(getPaitaBricolageFournisseur)




export default router;
