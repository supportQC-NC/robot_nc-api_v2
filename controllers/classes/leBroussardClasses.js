import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LeBroussardClasse from "../../models/bases/LE_BROUSSARD/Classnum.js";

// Get all LEBROUSSARD Classes
const getLeBroussardClasses = asyncHandler(async (req, res, next) => {
  const classes = await LeBroussardClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single LEBROUSSARD classe
const getLeBroussardClasse = asyncHandler(async (req, res, next) => {
  const classe = await LeBroussardClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getLeBroussardClasses,
  getLeBroussardClasse,
};
