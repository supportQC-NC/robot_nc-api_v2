import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import HdClasse from "../../models/bases/HD/HdClassnum.js";

// Get all HD Classes
const getHdClasses = asyncHandler(async (req, res, next) => {
  const classes = await HdClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single HD classe
const getHdClasse = asyncHandler(async (req, res, next) => {
  const classe = await HdClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getHdClasses,
  getHdClasse,

};
