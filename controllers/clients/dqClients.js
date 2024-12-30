import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqClient from "../../models/bases/DQ/DqClient.js";

// Get all DQ Clients
const getDqClients = asyncHandler(async (req, res, next) => {
  const clients = await DqClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single DQ client
const getDqClient = asyncHandler(async (req, res, next) => {
  const client = await DqClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getDqClients, getDqClient };
