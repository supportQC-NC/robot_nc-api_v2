import express from "express";
import {
  getQcFactureDetails,
  getQcFactureDetail,
} from "../../controllers/factureDetails/qcFactureDetails.js";

const router = express.Router();

router.route("/").get(getQcFactureDetails);

router.route("/:id").get(getQcFactureDetail);

export default router;
