import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbClient from "../../models/bases/AVB/AVBClient.js";

// Get all AVB Clients
const getAvbClients = asyncHandler(async (req, res, next) => {
  const clients = await AvbClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single AVB client
const getAvbClient = asyncHandler(async (req, res, next) => {
  const client = await AvbClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getAvbClients, getAvbClient };
