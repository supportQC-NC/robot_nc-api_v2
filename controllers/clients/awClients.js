import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AwClient from "../../models/bases/AW/AwClient.js";

// Get all Aw Clients
const getAwClients = asyncHandler(async (req, res, next) => {
  const clients = await AwClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single Aw client
const getAwClient = asyncHandler(async (req, res, next) => {
  const client = await AwClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getAwClients, getAwClient };
