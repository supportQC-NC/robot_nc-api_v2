import path from "path";
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
      new ErrorResponse(`Compagnie introuvable avec l’identifiant : ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: compagny,
  });
});

/**
 * @desc      Create a new compagny
 * @route     POST /api/v1/compagnies
 * @access    Private
 */
export const addCompagny = asyncHandler(async (req, res, next) => {
  const compagny = await Compagny.create(req.body);

  res.status(201).json({
    success: true,
    data: compagny,
  });
});

/**
 * @desc      Update a compagny by ID
 * @route     PUT /api/v1/compagnies/:id
 * @access    Private
 */
export const updateCompagny = asyncHandler(async (req, res, next) => {
  const compagny = await Compagny.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!compagny) {
    return next(
      new ErrorResponse(`Compagnie introuvable avec l’identifiant : ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: compagny,
  });
});

/**
 * @desc      Delete a compagny by ID
 * @route     DELETE /api/v1/compagnies/:id
 * @access    Private
 */
export const deleteCompagny = asyncHandler(async (req, res, next) => {
  const compagny = await Compagny.findByIdAndDelete(req.params.id);

  if (!compagny) {
    return next(
      new ErrorResponse(`Compagnie introuvable avec l’identifiant : ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});

/**
 * @desc      Upload a logo for a compagny
 * @route     PUT /api/v1/compagnies/:id/logo
 * @access    Private
 */
export const uploadCompagnyLogo = asyncHandler(async (req, res, next) => {
  console.log("DEBUG - Headers reçus :", req.headers);
  console.log("DEBUG - Body reçu :", req.body);
  console.log("DEBUG - Fichiers reçus :", req.files);

  const compagny = await Compagny.findById(req.params.id);
  if (!compagny) {
    return next(new ErrorResponse(`Compagnie introuvable avec l’identifiant : ${req.params.id}`, 404));
  }

  if (!req.files || !req.files.file) {
    console.error("Erreur : Aucun fichier reçu");
    return next(new ErrorResponse("Aucun fichier reçu", 400));
  }

  const file = req.files.file;
  console.log("DEBUG - Fichier reçu :", file);

  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse("Veuillez télécharger une image", 400));
  }

  file.name = `logo_${compagny._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse("Erreur lors du téléchargement du fichier", 500));
    }

    await Compagny.findByIdAndUpdate(req.params.id, { logo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
