import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageClient from "../../models/bases/PAITA_BRICOLAGE/Client.js";

// Get all PAITABRICOLAGE Clients

const getPaitaBricolageClients = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await PaitaBricolageClient.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});




// Get single PAITABRICOLAGE client
const getPaitaBricolageClient = asyncHandler(async (req, res, next) => {
  const client = await PaitaBricolageClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getPaitaBricolageClients, getPaitaBricolageClient };
