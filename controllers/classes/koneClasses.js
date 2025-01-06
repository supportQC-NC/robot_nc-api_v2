import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import KoneClasse from "../../models/bases/KONE/Classnum.js";

// Get all KONE Classes
const getKoneClasses = asyncHandler(async (req, res, next) => {
  const classes = await KoneClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single KONE classe
const getKoneClasse = asyncHandler(async (req, res, next) => {
  const classe = await KoneClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getKoneClasses,
  getKoneClasse,
};
