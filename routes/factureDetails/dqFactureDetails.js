import express from "express";
import {
  getDqFactureDetails,
  getDqFactureDetail,
} from "../../controllers/factureDetails/dqFactureDetails.js";

const router = express.Router();

router.route("/").get(getDqFactureDetails);

router.route("/:id").get(getDqFactureDetail);

export default router;
