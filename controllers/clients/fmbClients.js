import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import FmbClient from "../../models/bases/FMB/Client.js";

// Get all FMB Clients

const getFmbClients = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await FmbClient.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});







// Get single FMB client
const getFmbClient = asyncHandler(async (req, res, next) => {
  const client = await FmbClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getFmbClients, getFmbClient };
