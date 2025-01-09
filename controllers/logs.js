import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/async.js";
import Log from "../models/Log.js";

// Get all logs
const getLogs = asyncHandler(async (req, res, next) => {
  const logs = await Log.find().populate("user", "name email");

  res.status(200).json({
    success: true,
    count: logs.length,
    data: logs,
  });
});

// Get single log by ID
const getLog = asyncHandler(async (req, res, next) => {
  const log = await Log.findById(req.params.id).populate("user", "name email");

  if (!log) {
    return next(
      new ErrorResponse(`Log introuvable avec l’identifiant : ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: log,
  });
});

// Create new log
const createLog = asyncHandler(async (req, res, next) => {
  const log = await Log.create(req.body);

  res.status(201).json({
    success: true,
    data: log,
  });
});

// Update log
const updateLog = asyncHandler(async (req, res, next) => {
  const log = await Log.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!log) {
    return next(
      new ErrorResponse(`Log introuvable avec l’identifiant : ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: log,
  });
});

// Delete log
const deleteLog = asyncHandler(async (req, res, next) => {
  const log = await Log.findByIdAndDelete(req.params.id);

  if (!log) {
    return next(
      new ErrorResponse(`Log introuvable avec l’identifiant : ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});

export { getLogs, getLog, createLog, updateLog, deleteLog };
