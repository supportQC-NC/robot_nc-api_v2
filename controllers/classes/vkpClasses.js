import ErrorResponse from "../../utils/errorResponse.js";
import asyncHandler from "../../middleware/async.js";
import VkpClasse from "../../models/bases/VKP/Classnum.js";

// Get all VKP Classes
const getVkpClasses = asyncHandler(async (req, res, next) => {
  const classes = await VkpClasse.find();

  res
    .status(200)
    .json({ success: true, count: classes.length, data: classes });
});

// Get single VKP classe
const getVkpClasse = asyncHandler(async (req, res, next) => {
  const classe = await VkpClasse.findById(req.params.id);
  if (!classe) {
    return next(
      new ErrorResponse(`Classe non trouvé avec l'id : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: classe });
});





export {
  getVkpClasses,
  getVkpClasse,
};
