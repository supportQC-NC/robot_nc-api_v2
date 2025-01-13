import express from "express";
import {
  getAvbFournisseurs,
  getAvbFournisseur,
} from "../../controllers/fournisseurs/avbFournisseurs.js";


import advancedResults from "../../middleware/advancedResults.js";
import avbFournisseurs from '../../models/bases/AVB/Fournisseur.js'

const router = express.Router();

router.route("/")
.get(advancedResults(avbFournisseurs), getAvbFournisseurs)

router.route("/:id").get(getAvbFournisseur);

export default router;
