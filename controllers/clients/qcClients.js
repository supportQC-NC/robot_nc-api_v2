import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcClient from "../../models/bases/QC/Client.js";

// Get all QC Clients
const getQcClients = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await QcClient.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});


// Get single QC client
const getQcClient = asyncHandler(async (req, res, next) => {
  const client = await QcClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getQcClients, getQcClient };
