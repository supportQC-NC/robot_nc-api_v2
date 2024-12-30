import express from "express";
import {
  getPaitaBricolageClasses,
  getPaitaBricolageClasse,
} from "../../controllers/classes/paitaBricolageClasses.js";

const router = express.Router();

router.route("/").get(getPaitaBricolageClasses);

router.route("/:id").get(getPaitaBricolageClasse);

export default router;
