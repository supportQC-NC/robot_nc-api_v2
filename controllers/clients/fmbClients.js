import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import FmbClient from "../../models/bases/FMB/FmbClient.js";

// Get all FMB Clients
const getFmbClients = asyncHandler(async (req, res, next) => {
  const clients = await FmbClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single FMB client
const getFmbClient = asyncHandler(async (req, res, next) => {
  const client = await FmbClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getFmbClients, getFmbClient };
