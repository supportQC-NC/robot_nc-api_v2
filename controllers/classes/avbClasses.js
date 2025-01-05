import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import AvbClasse from "../../models/bases/AVB/AVBClassnum.js";

// Get all AVB Classes
const getAvbClasses = asyncHandler(async (req, res, next) => {
  const classes = await AvbClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});



// Get single AVB classe
const getAvbClasse = asyncHandler(async (req, res, next) => {
  const classe = await AvbClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getAvbClasses,
  getAvbClasse,

};
