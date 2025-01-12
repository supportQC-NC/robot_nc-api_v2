import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqClient from "../../models/bases/DQ/Client.js";



const getDqClients = asyncHandler(async (req, res, next) => {
  // Utiliser les résultats de `advancedResults` définis dans res.advancedResults
  if (res.advancedResults) {
    return res.status(200).json(res.advancedResults);
  }

  // Si `advancedResults` n'a pas été exécuté ou retourné un résultat
  const articles = await DqClient.find();

  res
    .status(200)
    .json({ success: true, count: articles.length, data: articles });
});




// Get single DQ client
const getDqClient = asyncHandler(async (req, res, next) => {
  const client = await DqClient.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`Client non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: client });
});

export { getDqClients, getDqClient };
