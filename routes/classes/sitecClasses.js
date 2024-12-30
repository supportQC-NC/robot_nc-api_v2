import express from "express";
import {
  getSitecClasses,
  getSitecClasse,
} from "../../controllers/classes/sitecClasses.js";

const router = express.Router();

router.route("/").get(getSitecClasses);

router.route("/:id").get(getSitecClasse);

export default router;
