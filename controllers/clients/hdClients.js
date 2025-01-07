import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import HdClient from "../../models/bases/HD/Client.js";

// Get all HD Clients
const getHdClients = asyncHandler(async (req, res, next) => {
  const clients = await HdClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single HD client
const getHdClient = asyncHandler(async (req, res, next) => {
  const client = await HdClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client non trouvé avec l'id :${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getHdClients, getHdClient };
