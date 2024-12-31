import express from "express";
import {
  getAvbFactureDetails,
  getAvbFactureDetail,
} from "../../controllers/factureDetails/avbFactureDetails.js";

const router = express.Router();

router.route("/").get(getAvbFactureDetails);

router.route("/:id").get(getAvbFactureDetail);

export default router;
