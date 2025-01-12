import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacClient from "../../models/bases/KOUMAC/Client.js";

// Get all KOUMAC Clients

const getKoumacClients = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await KoumacClient.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
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
