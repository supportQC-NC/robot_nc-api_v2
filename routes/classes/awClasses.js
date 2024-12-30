import express from "express";
import {
  getAwClasses,
  getAwClasse,
} from "../../controllers/classes/awClasses.js";

const router = express.Router();

router.route("/").get(getAwClasses);

router.route("/:id").get(getAwClasse);

export default router;
