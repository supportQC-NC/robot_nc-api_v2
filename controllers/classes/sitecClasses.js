import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import SitecClasse from "../../models/bases/SITEC/Classnum.js";

// Get all SITEC Classes
const getSitecClasses = asyncHandler(async (req, res, next) => {
  const classes = await SitecClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single SITEC classe
const getSitecClasse = asyncHandler(async (req, res, next) => {
  const classe = await SitecClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getSitecClasses,
  getSitecClasse,
};
