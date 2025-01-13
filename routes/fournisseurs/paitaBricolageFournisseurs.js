import express from "express";
import {
  getPaitaBricolageFournisseurs,
  getPaitaBricolageFournisseur
} from "../../controllers/fournisseurs/paitaBricolageFournisseurs.js"


import advancedResults from "../../middleware/advancedResults.js";
import PaitaBricolageFournisseurs from '../../models/bases/PAITA_BRICOLAGE/Fournisseur.js'
const router = express.Router();

router.route("/")
.get(advancedResults(PaitaBricolageFournisseurs), getPaitaBricolageFournisseurs)


router.route("/:id").get(getPaitaBricolageFournisseur)




export default router;
