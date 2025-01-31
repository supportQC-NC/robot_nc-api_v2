
import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Veuillez ajouter un titre pour l'avis."],
    maxlength: 100
  },
  text: {
    type: String,
    required: [true, 'Veuillez ajouter du texte']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, 'Veuillez ajouter une note entre 1 et 10']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bootcamp',
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
});

// Prevent user from submitting more than one review per bootcamp
ReviewSchema.index({ bootcamp: 1, user: 1 }, { unique: true });

// Static method to get avg rating and save
ReviewSchema.statics.getAverageRating = async function(bootcampId) {
  const obj = await this.aggregate([
    {
      $match: { bootcamp: bootcampId }
    },
    {
      $group: {
        _id: '$bootcamp',
        averageRating: { $avg: '$rating' }
      }
    }
  ]);

  try {
    await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
      averageRating: obj[0].averageRating
    });
  } catch (err) {
    console.error(err);
  }
};

// Call getAverageCost after save
ReviewSchema.post('save', function() {
  this.constructor.getAverageRating(this.bootcamp);
});

// Call getAverageCost before remove
ReviewSchema.pre('remove', function() {
  this.constructor.getAverageRating(this.bootcamp);
});




export default mongoose.model('Review', ReviewSchema);