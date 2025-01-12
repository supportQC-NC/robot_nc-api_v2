import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import VkpClient from "../../models/bases/VKP/Client.js";

// Get all VKP Clients

const getVkpClients = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await VkpClient.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});




// Get single VKP client
const getVkpClient = asyncHandler(async (req, res, next) => {
  const client = await VkpClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getVkpClients, getVkpClient };
