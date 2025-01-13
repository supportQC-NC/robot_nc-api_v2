import express from "express";
import {
  getKoumacFournisseurs,
  getKoumacFournisseur
} from "../../controllers/fournisseurs/koumacFournisseurs.js"


import advancedResults from "../../middleware/advancedResults.js";
import KoumacFournisseurs from '../../models/bases/KOUMAC/Fournisseur.js'

const router = express.Router();

router.route("/")
.get(advancedResults(KoumacFournisseurs), getKoumacFournisseurs)


router.route("/:id").get(getKoumacFournisseur)



export default router;
