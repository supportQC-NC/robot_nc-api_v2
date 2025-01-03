import express from "express";
import {
  getKoneFactureDetails,
  getKoneFactureDetail,
} from "../../controllers/factureDetails/koneFactureDetails.js";

const router = express.Router();

router.route("/").get(getKoneFactureDetails);

router.route("/:id").get(getKoneFactureDetail);

export default router;
