import express from "express";
import {
  getLeBroussardClasses,
  getLeBroussardClasse,
} from "../../controllers/classes/leBroussardClasses.js";

const router = express.Router();

router.route("/").get(getLeBroussardClasses);

router.route("/:id").get(getLeBroussardClasse);

export default router;
