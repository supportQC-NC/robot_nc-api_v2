import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacClient from "../../models/bases/KOUMAC/KoumacClient.js";

// Get all KOUMAC Clients
const getKoumacClients = asyncHandler(async (req, res, next) => {
  const clients = await KoumacClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single KOUMAC client
const getKoumacClient = asyncHandler(async (req, res, next) => {
  const client = await KoumacClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getKoumacClients, getKoumacClient };
