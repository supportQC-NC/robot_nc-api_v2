import express from "express";
import {
  getSitecFactures,
  getSitecFacture,
} from "../../controllers/factures/sitecFactures.js";

const router = express.Router();

router.route("/").get(getSitecFactures);

router.route("/:id").get(getSitecFacture);

export default router;
