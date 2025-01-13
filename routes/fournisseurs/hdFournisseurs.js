import express from "express";
import {
  getHdFournisseurs,
  getHdFournisseur,
} from "../../controllers/fournisseurs/hdFournisseurs.js";

import advancedResults from "../../middleware/advancedResults.js";
import hdFournisseurs from '../../models/bases/HD/Fournisseur.js'

const router = express.Router();

router.route("/")
.get(advancedResults(hdFournisseurs), getHdFournisseurs)

router.route("/:id").get(getHdFournisseur);

export default router;
