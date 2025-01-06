import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcClient from "../../models/bases/QC/Client.js";

// Get all QC Clients
const getQcClients = asyncHandler(async (req, res, next) => {
  const clients = await QcClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single QC client
const getQcClient = asyncHandler(async (req, res, next) => {
  const client = await QcClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getQcClients, getQcClient };
