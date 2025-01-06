import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageClient from "../../models/bases/PAITA_BRICOLAGE/Client.js";

// Get all PAITABRICOLAGE Clients
const getPaitaBricolageClients = asyncHandler(async (req, res, next) => {
  const clients = await PaitaBricolageClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single PAITABRICOLAGE client
const getPaitaBricolageClient = asyncHandler(async (req, res, next) => {
  const client = await PaitaBricolageClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getPaitaBricolageClients, getPaitaBricolageClient };
