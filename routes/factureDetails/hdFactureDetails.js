import express from "express";
import {
  getHdFactureDetails,
  getHdFactureDetail,
} from "../../controllers/factureDetails/hdFactureDetails.js";

const router = express.Router();

router.route("/").get(getHdFactureDetails);

router.route("/:id").get(getHdFactureDetail);

export default router;
