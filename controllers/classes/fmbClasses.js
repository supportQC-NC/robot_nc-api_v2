import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import FmbClasse from "../../models/bases/FMB/FmbClassNum.js";

// Get all FMB Classes
const getFmbClasses = asyncHandler(async (req, res, next) => {
  const classes = await FmbClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});



// Get single FMB classe
const getFmbClasse = asyncHandler(async (req, res, next) => {
  const classe = await FmbClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getFmbClasses,
  getFmbClasse,
};
