import ErrorResponse from "../utils/errorResponse.js";


const errorHandler = (err, req, res, next) => {
  
  let error = { ...err };
  error.message = err.message;
  
  console.log(err);
  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Ressource non trouvée avec l'id : ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = "Valeur de champ en double saisie";
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: error.message || "Erreur du serveur",
  });
};

export default errorHandler;