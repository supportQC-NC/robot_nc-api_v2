import express from "express";
import {
  getMeareClasses,
  getMeareClasse,
} from "../../controllers/classes/meareClasses.js";

const router = express.Router();

router.route("/").get(getMeareClasses);

router.route("/:id").get(getMeareClasse);

export default router;
