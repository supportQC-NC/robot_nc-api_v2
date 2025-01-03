import express from "express";
import {
  getVkpFactureDetails,
  getVkpFactureDetail,
} from "../../controllers/factureDetails/vkpFactureDetails.js";

const router = express.Router();

router.route("/").get(getVkpFactureDetails);

router.route("/:id").get(getVkpFactureDetail);

export default router;
