import express from "express";
import {
  getFmbFactureDetails,
  getFmbFactureDetail,
} from "../../controllers/factureDetails/fmbFactureDetails.js";

const router = express.Router();

router.route("/").get(getFmbFactureDetails);

router.route("/:id").get(getFmbFactureDetail);

export default router;
