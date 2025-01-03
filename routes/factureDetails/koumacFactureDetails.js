import express from "express";
import {
  getKoumacFactureDetails,
  getKoumacFactureDetail,
} from "../../controllers/factureDetails/koumacFactureDetails.js";

const router = express.Router();

router.route("/").get(getKoumacFactureDetails);

router.route("/:id").get(getKoumacFactureDetail);

export default router;
