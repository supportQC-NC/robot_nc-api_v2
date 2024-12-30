import express from "express";
import {
  getKoumacClasses,
  getKoumacClasse,
} from "../../controllers/classes/koumacClasses.js";

const router = express.Router();

router.route("/").get(getKoumacClasses);

router.route("/:id").get(getKoumacClasse);

export default router;
