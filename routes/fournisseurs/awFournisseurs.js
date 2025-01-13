import express from "express";
import {
  getAwFournisseurs,
  getAwFournisseur,
} from "../../controllers/fournisseurs/awFournisseurs.js";

import advancedResults from "../../middleware/advancedResults.js";
import awFournisseurs from '../../models/bases/AW/Fournisseur.js'

const router = express.Router();

router.route("/")
.get(advancedResults(awFournisseurs), getAwFournisseurs)

router.route("/:id").get(getAwFournisseur);

export default router;
