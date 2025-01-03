import express from "express";
import {
  getMeareFactureDetails,
  getMeareFactureDetail,
} from "../../controllers/factureDetails/meareFactureDetails.js";

const router = express.Router();

router.route("/").get(getMeareFactureDetails);

router.route("/:id").get(getMeareFactureDetail);

export default router;
