import express from "express";
import {
  getQcFournisseurs,
  getQcFournisseur
} from "../../controllers/fournisseurs/qcFournisseurs.js"


import advancedResults from "../../middleware/advancedResults.js";
import QcFournisseurs from '../../models/bases/QC/Fournisseur.js'
const router = express.Router();

router.route("/")
.get(advancedResults(QcFournisseurs), getQcFournisseurs)


router.route("/:id").get(getQcFournisseur)




export default router;
