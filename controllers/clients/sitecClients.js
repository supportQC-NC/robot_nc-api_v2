import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import SitecClient from "../../models/bases/SITEC/SITECClient.js";

// Get all SITEC Clients
const getSitecClients = asyncHandler(async (req, res, next) => {
  const clients = await SitecClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single SITEC client
const getSitecClient = asyncHandler(async (req, res, next) => {
  const client = await SitecClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getSitecClients, getSitecClient };
