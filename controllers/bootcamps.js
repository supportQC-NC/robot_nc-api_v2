import path from 'path'
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/async.js";
import Bootcamp from "../models/Bootcamp.js";

// Get all bootcamps
const getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();

  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});



// Get single bootcamp
const getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp introuvable avec l’identifiant :  ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});


// Create new bootcamp
const createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, data: bootcamp });
});

// Update bootcamp
const updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp introuvable avec l’identifiant: ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// Delete bootcamp
const deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp introuvable avec l’identifiant : ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});


// Upload photo for bootcamp
const bootcampPhotoUpload = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp introuvable avec l’identifiant : ${req.params.id}`, 404)
    );
  }
  
  if(!req.files) {
    return next(
      new ErrorResponse(`please upload a file`, 404)
    );
  }
  const file = req.files.file;
  // make sur the image is a photo
  if(!file.mimetype.startsWith('image')) {
    return next(
      new ErrorResponse(`please upload an image file`, 404)
    );
  }
  // check filesize
  if(file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(`please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 404)
    );   
  }

  // Create custom filename 
  file.name = `photo_${bootcamp._id}${path.parse(file.name).ext}`

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if(err) {
         console.error(err)

         return next(
          new ErrorResponse(`Problem with file upload`, 500)
        );   
    }

    await Bootcamp.findByIdAndUpdate(req.params.id , {photo: file.name})
       res.status(200).json

  })

  res.status(200).json({
    success: true, 
    data:file.name
  })

 
  
  
});



export {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  bootcampPhotoUpload,
};
