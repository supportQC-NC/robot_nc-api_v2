import express from "express";
import {
  getHdFactures,
  getHdFacture,
} from "../../controllers/factures/hdFactures.js";

const router = express.Router();

router.route("/").get(getHdFactures);

router.route("/:id").get(getHdFacture);

export default router;
