// controllers/compagnies.js

import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/async.js";
import Compagny from "../models/Company.js";

/**
 * @desc      Get all compagnies
 * @route     GET /api/v1/compagnies
 * @access    Public
 */
export const getCompagnies = asyncHandler(async (req, res, next) => {
  const compagnies = await Compagny.find();

  res.status(200).json({
    success: true,
    count: compagnies.length,
    data: compagnies,
  });
});

/**
 * @desc      Get single compagny by ID
 * @route     GET /api/v1/compagnies/:id
 * @access    Public
 */
export const getCompagny = asyncHandler(async (req, res, next) => {
  const compagny = await Compagny.findById(req.params.id);

  if (!compagny) {
    return next(
      new ErrorResponse(`Compagnie introuvable avec l’identifiant ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: compagny,
  });
});

/**
 * @desc      Add a new compagny
 * @route     POST /api/v1/compagnies
 * @access    Private
 */
export const addCompagny = asyncHandler(async (req, res, next) => {
  // Par exemple, si tu souhaites lier la compagnie à l’utilisateur
  // qui crée la compagnie, tu peux ajouter :
  // req.body.user = req.user.id;

  const newCompagny = await Compagny.create(req.body);

  res.status(201).json({
    success: true,
    data: newCompagny,
  });
});

/**
 * @desc      Update compagny by ID
 * @route     PUT /api/v1/compagnies/:id
 * @access    Private
 */
export const updateCompagny = asyncHandler(async (req, res, next) => {
  let compagny = await Compagny.findById(req.params.id);

  if (!compagny) {
    return next(
      new ErrorResponse(`Compagnie introuvable avec l’identifiant ${req.params.id}`, 404)
    );
  }

  compagny = await Compagny.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: compagny,
  });
});

/**
 * @desc      Delete compagny by ID
 * @route     DELETE /api/v1/compagnies/:id
 * @access    Private
 */

export const deleteCompagny = asyncHandler(async (req, res, next) => {
  const compagny = await Compagny.findByIdAndDelete(req.params.id);
  if (!compagny) {
    return next(
      new ErrorResponse(`Compagny introuvable avec l’identifiant : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});
