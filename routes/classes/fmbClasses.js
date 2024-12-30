import express from "express";
import {
  getFmbClasses,
  getFmbClasse,
} from "../../controllers/classes/fmbClasses.js";

const router = express.Router();

router.route("/").get(getFmbClasses);

router.route("/:id").get(getFmbClasse);

export default router;
