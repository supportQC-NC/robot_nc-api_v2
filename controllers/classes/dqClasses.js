import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import DqClasse from "../../models/bases/DQ/Classnum.js";

// Get all DQ Classes
const getDqClasses = asyncHandler(async (req, res, next) => {
  const classes = await DqClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});



// Get single DQ classe
const getDqClasse = asyncHandler(async (req, res, next) => {
  const classe = await DqClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getDqClasses,
  getDqClasse,
};
