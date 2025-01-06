import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardClient from "../../models/bases/LE_BROUSSARD/Client.js";

// Get all LEBROUSSARD Clients
const getLeBroussardClients = asyncHandler(async (req, res, next) => {
  const clients = await LeBroussardClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single LEBROUSSARD client
const getLeBroussardClient = asyncHandler(async (req, res, next) => {
  const client = await LeBroussardClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getLeBroussardClients, getLeBroussardClient };
