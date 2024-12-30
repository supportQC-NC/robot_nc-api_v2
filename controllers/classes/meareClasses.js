import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import MeareClasse from "../../models/bases/MEARE/MeareClassNum.js";

// Get all MEARE Classes
const getMeareClasses = asyncHandler(async (req, res, next) => {
  const classes = await MeareClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single MEARE classe
const getMeareClasse = asyncHandler(async (req, res, next) => {
  const classe = await MeareClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getMeareClasses,
  getMeareClasse,
};
