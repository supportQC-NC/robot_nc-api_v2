import express from "express";
import {
  getVkpFournisseurs,
  getVkpFournisseur
} from "../../controllers/fournisseurs/vkpFournisseurs.js"


import advancedResults from "../../middleware/advancedResults.js";
import VkpFournisseurs from '../../models/bases/VKP/Fournisseur.js'
const router = express.Router();

router.route("/")
.get(advancedResults(VkpFournisseurs), getVkpFournisseurs)


router.route("/:id").get(getVkpFournisseur)




export default router;
