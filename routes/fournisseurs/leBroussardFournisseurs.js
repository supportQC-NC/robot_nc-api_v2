import express from "express";
import {
  getLeBroussardFournisseurs,
  getLeBroussardFournisseur
} from "../../controllers/fournisseurs/leBroussardFournisseurs.js"


import advancedResults from "../../middleware/advancedResults.js";
import LeBroussardFournisseurs from '../../models/bases/LE_BROUSSARD/Fournisseur.js'

const router = express.Router();

router.route("/")
.get(advancedResults(LeBroussardFournisseurs), getLeBroussardFournisseurs)


router.route("/:id").get(getLeBroussardFournisseur)




export default router;
