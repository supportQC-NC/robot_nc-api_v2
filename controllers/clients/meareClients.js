import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import MeareClient from "../../models/bases/MEARE/Client.js";



const getMeareClients = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await KoneClient.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
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
