import express from "express";
import {
  getKoneFournisseurs,
  getKoneFournisseur,
} from "../../controllers/fournisseurs/koneFournisseurs.js";

import advancedResults from "../../middleware/advancedResults.js";
import koneFournisseurs from '../../models/bases/KONE/Fournisseur.js'

const router = express.Router();

router.route("/")
.get(advancedResults(koneFournisseurs), getKoneFournisseurs)

router.route("/:id").get(getKoneFournisseur);



export default router;
