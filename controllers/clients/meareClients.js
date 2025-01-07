import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import MeareClient from "../../models/bases/MEARE/Client.js";

// Get all MEARE Clients
const getMeareClients = asyncHandler(async (req, res, next) => {
  const clients = await MeareClient.find();

  res.status(200).json({ success: true, count: clients.length, data: clients });
});

// Get single MEARE client
const getMeareClient = asyncHandler(async (req, res, next) => {
  const client = await MeareClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getMeareClients, getMeareClient };
