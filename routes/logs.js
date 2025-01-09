import express from "express";
import { getLogs, getLog, createLog, updateLog, deleteLog } from "../controllers/logs.js";

const router = express.Router();

router.route("/")
  .get(getLogs)
  .post(createLog);

router.route("/:id")
  .get(getLog)
  .put(updateLog)
  .delete(deleteLog);

export default router;
