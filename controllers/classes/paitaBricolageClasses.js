import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import PaitaBricolageClasse from "../../models/bases/PAITA_BRICOLAGE/Classnum.js";

// Get all PAITABRICOLAGE Classes
const getPaitaBricolageClasses = asyncHandler(async (req, res, next) => {
  const classes = await PaitaBricolageClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single PAITABRICOLAGE classe
const getPaitaBricolageClasse = asyncHandler(async (req, res, next) => {
  const classe = await PaitaBricolageClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getPaitaBricolageClasses,
  getPaitaBricolageClasse,
};
