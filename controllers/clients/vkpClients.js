import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import VkpClient from "../../models/bases/VKP/VkpClient.js";

// Get all VKP Clients
const getVkpClients = asyncHandler(async (req, res, next) => {
  const clients = await VkpClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single VKP client
const getVkpClient = asyncHandler(async (req, res, next) => {
  const client = await VkpClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getVkpClients, getVkpClient };
