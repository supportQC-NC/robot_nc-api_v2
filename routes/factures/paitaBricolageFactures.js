import express from "express";
import {
  getPaitaBricolageFactures,
  getPaitaBricolageFacture,
} from "../../controllers/factures/paitaBricolage.js";

const router = express.Router();

router.route("/").get(getPaitaBricolageFactures);

router.route("/:id").get(getPaitaBricolageFacture);

export default router;
