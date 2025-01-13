import express from "express";
import {
  getFmbFournisseurs,
  getFmbFournisseur,
} from "../../controllers/fournisseurs/fmbFournisseurs.js";


import advancedResults from "../../middleware/advancedResults.js";
import fmbFournisseurs from '../../models/bases/FMB/Fournisseur.js'


const router = express.Router();

router.route("/")
.get(advancedResults(fmbFournisseurs), getFmbFournisseurs)

router.route("/:id").get(getFmbFournisseur);

export default router;
