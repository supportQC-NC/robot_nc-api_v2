import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoneClient from "../../models/bases/KONE/Client.js";

// Get all KONE Clients
const getKoneClients = asyncHandler(async (req, res, next) => {
  const clients = await KoneClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single KONE client
const getKoneClient = asyncHandler(async (req, res, next) => {
  const client = await KoneClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client non trouvé avec l'id :${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getKoneClients, getKoneClient };
