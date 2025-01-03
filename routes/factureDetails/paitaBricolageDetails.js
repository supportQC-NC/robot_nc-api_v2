import express from "express";
import {
  getPaitaBricolageFactureDetails,
  getPaitaBricolageFactureDetail,
} from "../../controllers/factureDetails/paitaBricolageFactureDetails.js";

const router = express.Router();

router.route("/").get(getPaitaBricolageFactureDetails);

router.route("/:id").get(getPaitaBricolageFactureDetail);

export default router;
