import express from "express";
import {
  getLdFournisseurs,
  getLdFournisseur
} from "../../controllers/fournisseurs/ldFournisseurs.js"


import advancedResults from "../../middleware/advancedResults.js";
import LdFournisseurs from '../../models/bases/LD/Fournisseur.js'

const router = express.Router();

router.route("/")
.get(advancedResults(LdFournisseurs), getLdFournisseurs)


router.route("/:id").get(getLdFournisseur)




export default router;
