// auth.js
import jwt from 'jsonwebtoken';
import asyncHandler from './async.js';
import ErrorResponse from '../utils/errorResponse.js';
import User from '../models/User.js';

/**
 * @desc  Middleware de protection des routes
 *        Vérifie l'existence et la validité du token JWT
 */
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Récupère le token depuis l'entête Authorization: Bearer <token>
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  // Si tu souhaites vérifier aussi les cookies :
  else if (req.cookies.token) {
    token = req.cookies.token;
  }

  // Si aucun token n'a été trouvé
  if (!token) {
    return next(new ErrorResponse("Vous n'êtes pas autorisé à accéder à cette route", 401));
  }

  try {
    // Vérifie la validité du token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Récupère l'utilisateur à partir du payload décodé
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return next(new ErrorResponse("L'utilisateur n'existe pas", 401));
    }

    next();
  } catch (err) {
    return next(new ErrorResponse("Vous n'êtes pas autorisé à accéder à cette route", 401));
  }
});

/**
 * @desc  Middleware d'autorisation par rôle
 *        Vérifie si l'utilisateur connecté appartient à l'un des rôles autorisés
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    // req.user.role vient du middleware protect, où on a attaché "req.user"
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `Le rôle de l'utilisateur ${req.user.role} n'est pas autorisé à accéder à cette route.`,
          403
        )
      );
    }
    next();
  };
};
