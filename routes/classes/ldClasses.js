import express from "express";
import {
  getLdClasses,
  getLdClasse,
} from "../../controllers/classes/ldClasses.js";

const router = express.Router();

router.route("/").get(getLdClasses);

router.route("/:id").get(getLdClasse);

export default router;
