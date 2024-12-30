import express from "express";
import {
  getKoneClasses,
  getKoneClasse,
} from "../../controllers/classes/koneClasses.js";

const router = express.Router();

router.route("/").get(getKoneClasses);

router.route("/:id").get(getKoneClasse);

export default router;
