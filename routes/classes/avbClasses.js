import express from "express";
import {
  getAvbClasses,
  getAvbClasse,
} from "../../controllers/classes/avbClasses.js";

const router = express.Router();

router.route("/").get(getAvbClasses);

router.route("/:id").get(getAvbClasse);

export default router;
