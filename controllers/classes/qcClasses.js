import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import QcClasse from "../../models/bases/QC/Classnum.js";

// Get all QC Classes
const getQcClasses = asyncHandler(async (req, res, next) => {
  const classes = await QcClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single QC classe
const getQcClasse = asyncHandler(async (req, res, next) => {
  const classe = await QcClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getQcClasses,
  getQcClasse,
};
