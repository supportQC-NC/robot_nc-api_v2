import express from "express";
import {
  getSitecFactureDetails,
  getSitecFactureDetail,
} from "../../controllers/factureDetails/sitecFactureDetails.js";

const router = express.Router();

router.route("/").get(getSitecFactureDetails);

router.route("/:id").get(getSitecFactureDetail);

export default router;
