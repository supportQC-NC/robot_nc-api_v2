import express from "express";
import {
  getHdClasses,
  getHdClasse,
} from "../../controllers/classes/hdClasses.js";

const router = express.Router();

router.route("/").get(getHdClasses);

router.route("/:id").get(getHdClasse);

export default router;
