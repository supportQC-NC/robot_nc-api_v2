import express from "express";
import {
  getQcClasses,
  getQcClasse,
} from "../../controllers/classes/qcClasses.js";

const router = express.Router();

router.route("/").get(getQcClasses);

router.route("/:id").get(getQcClasse);

export default router;
