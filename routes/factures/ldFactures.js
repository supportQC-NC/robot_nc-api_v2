import express from "express";
import {
  getLdFactures,
  getLdFacture,
} from "../../controllers/factures/ldFactures.js";

const router = express.Router();

router.route("/").get(getLdFactures);

router.route("/:id").get(getLdFacture);

export default router;
