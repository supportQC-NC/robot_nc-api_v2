import express from "express";
import {
  getLdFactureDetails,
  getLdFactureDetail,
} from "../../controllers/factureDetails/ldFactureDetails.js";

const router = express.Router();

router.route("/").get(getLdFactureDetails);

router.route("/:id").get(getLdFactureDetail);

export default router;
