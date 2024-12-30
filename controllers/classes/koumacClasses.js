import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoumacClasse from "../../models/bases/KOUMAC/KoumacClassNum.js";

// Get all KOUMAC Classes
const getKoumacClasses = asyncHandler(async (req, res, next) => {
  const classes = await KoumacClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single KOUMAC classe
const getKoumacClasse = asyncHandler(async (req, res, next) => {
  const classe = await KoumacClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getKoumacClasses,
  getKoumacClasse,
};
