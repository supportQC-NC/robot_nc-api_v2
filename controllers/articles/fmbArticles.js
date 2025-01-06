import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import FmbArticle from "../../models/bases/FMB/Article.js";

// Get all FMB Articles
const getFmbArticles = asyncHandler(async (req, res, next) => {
  let query;

  // Cloner req.query et supprimer les champs spécifiques pour éviter les conflits
  const reqQuery = { ...req.query };
  const removeFields = ["select", "sort", "page", "limit"];
  removeFields.forEach((param) => delete reqQuery[param]);

  // Filtrage avancé (opérateurs comme $gt, $lt, etc.)
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  query = FmbArticle.find(JSON.parse(queryStr));

  // SELECT fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields); // Sélectionner les champs spécifiés
  }

  // SORT (tri)
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy); // Appliquer le tri spécifié
  } else {
    query = query.sort("-createdAt"); // Tri par défaut : décroissant par date de création
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1; // Page par défaut : 1
  const limit = parseInt(req.query.limit, 10) || 100; // Limite par défaut : 100
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  // Exécuter la requête principale
  const articles = await query;

  // Compter le nombre total de documents
  const total = await FmbArticle.countDocuments(JSON.parse(queryStr));

  // Informations sur la pagination
  const totalPages = Math.ceil(total / limit);
  const pagination = {
    total,
    currentPage: page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
    nextPage: page < totalPages ? page + 1 : null,
    previousPage: page > 1 ? page - 1 : null,
  };

  // Retourner les résultats
  res.status(200).json({
    success: true,
    count: articles.length,
    pagination,
    data: articles,
  });
});


// Get single FMB article
const getFmbArticle = asyncHandler(async (req, res, next) => {
  const article = await FmbArticle.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: article });
});

export { getFmbArticles, getFmbArticle };
