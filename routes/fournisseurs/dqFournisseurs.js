import express from "express";
import {
  getDqFournisseurs,
  getDqFournisseur,
} from "../../controllers/fournisseurs/dqFournisseurs.js";


import advancedResults from "../../middleware/advancedResults.js";
import dqFournisseurs from '../../models/bases/DQ/Fournisseur.js'
const router = express.Router();

router.route("/")
.get(advancedResults(dqFournisseurs), getDqFournisseurs)

router.route("/:id").get(getDqFournisseur);

export default router;
