import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import LdClasse from "../../models/bases/LD/Classnum.js";

// Get all LD Classes
const getLdClasses = asyncHandler(async (req, res, next) => {
  const classes = await LdClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single LD classe
const getLdClasse = asyncHandler(async (req, res, next) => {
  const classe = await LdClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getLdClasses,
  getLdClasse,
};
