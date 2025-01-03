import express from "express";
import {
  getLeBroussardFactures,
  getLeBroussardFacture,
} from "../../controllers/factures/leBroussardFactures.js";

const router = express.Router();

router.route("/").get(getLeBroussardFactures);

router.route("/:id").get(getLeBroussardFacture);

export default router;
