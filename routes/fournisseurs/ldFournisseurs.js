import express from "express";
import {
  getLdFournisseurs,
  getLdFournisseur
} from "../../controllers/fournisseurs/ldFournisseurs.js"

const router = express.Router();

router.route("/").get(getLdFournisseurs)


router.route("/:id").get(getLdFournisseur)




export default router;
