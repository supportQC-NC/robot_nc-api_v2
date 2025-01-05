import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AwClasse from "../../models/bases/AW/AwClassnum.js";

// Get all AVB Classes
const getAwClasses = asyncHandler(async (req, res, next) => {
  const classes = await AwClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});



// Get single AVB classe
const getAwClasse = asyncHandler(async (req, res, next) => {
  const classe = await AwClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getAwClasses,
  getAwClasse,

};
