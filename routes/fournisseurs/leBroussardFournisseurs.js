import express from "express";
import {
  getLeBroussardFournisseurs,
  getLeBroussardFournisseur
} from "../../controllers/fournisseurs/leBroussardFournisseurs.js"

const router = express.Router();

router.route("/").get(getLeBroussardFournisseurs)


router.route("/:id").get(getLeBroussardFournisseur)




export default router;
