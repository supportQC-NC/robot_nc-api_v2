import express from "express";
import {
  getAwFactures,
  getAwFacture,
} from "../../controllers/factures/awFactures.js";

const router = express.Router();

router.route("/").get(getAwFactures);

router.route("/:id").get(getAwFacture);

export default router;
