import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LdClient from "../../models/bases/LD/LdClient.js";

// Get all LD Clients
const getLdClients = asyncHandler(async (req, res, next) => {
  const clients = await LdClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single LD client
const getLdClient = asyncHandler(async (req, res, next) => {
  const client = await LdClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getLdClients, getLdClient };
