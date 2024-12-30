import express from "express";
import {
  getVkpClasses,
  getVkpClasse,
} from "../../controllers/classes/vkpClasses.js";

const router = express.Router();

router.route("/").get(getVkpClasses);

router.route("/:id").get(getVkpClasse);

export default router;
