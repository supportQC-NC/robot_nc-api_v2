import express from "express";
import {
  getAvbFactures,
  getAvbFacture,
} from "../../controllers/factures/avbFactures.js";

const router = express.Router();

router.route("/").get(getAvbFactures);

router.route("/:id").get(getAvbFacture);

export default router;
