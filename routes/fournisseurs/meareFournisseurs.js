import express from "express";
import {
  getMeareFournisseurs,
  getMeareFournisseur
} from "../../controllers/fournisseurs/meareFournisseurs.js"

import advancedResults from "../../middleware/advancedResults.js";
import MeareFournisseurs from '../../models/bases/MEARE/Fournisseur.js'

const router = express.Router();

router.route("/")
.get(advancedResults(MeareFournisseurs), getMeareFournisseurs)


router.route("/:id").get(getMeareFournisseur)




export default router;
