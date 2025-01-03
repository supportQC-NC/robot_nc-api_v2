import express from "express";
import {
  getLeBroussardFactureDetails,
  getLeBroussardFactureDetail,
} from "../../controllers/factureDetails/leBroussardFactureDetails.js";

const router = express.Router();

router.route("/").get(getLeBroussardFactureDetails);

router.route("/:id").get(getLeBroussardFactureDetail);

export default router;
