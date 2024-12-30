import express from "express";
import {
  getDqClasses,
  getDqClasse,
} from "../../controllers/classes/dqClasses.js";

const router = express.Router();

router.route("/").get(getDqClasses);

router.route("/:id").get(getDqClasse);

export default router;
