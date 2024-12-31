import express from "express";
import {
  getAwFactureDetails,
  getAwFactureDetail,
} from "../../controllers/factureDetails/awFactureDetails.js";

const router = express.Router();

router.route("/").get(getAwFactureDetails);

router.route("/:id").get(getAwFactureDetail);

export default router;
