import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacClient from "../../models/bases/KOUMAC/Client.js";

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
      new ErrorResponse(`Client non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getKoumacClients, getKoumacClient };
