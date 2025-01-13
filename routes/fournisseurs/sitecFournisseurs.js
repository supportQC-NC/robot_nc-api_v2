import express from "express";
import {
  getSitecFournisseurs,
  getSitecFournisseur
} from "../../controllers/fournisseurs/sitecFournisseurs.js"



import advancedResults from "../../middleware/advancedResults.js";
import SitecFournisseurs from '../../models/bases/SITEC/Fournisseur.js'

const router = express.Router();

router.route("/")
.get(advancedResults(SitecFournisseurs), getSitecFournisseurs)


router.route("/:id").get(getSitecFournisseur)




export default router;
