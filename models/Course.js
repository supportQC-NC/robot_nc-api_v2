
import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Veuillez ajouter un titre de cours']
  },
  description: {
    type: String,
    required: [true, 'Veuillez ajouter une description']
  },
  weeks: {
    type: String,
    required: [true, 'Veuillez ajouter le nombre de semaines.']
  },
  tuition: {
    type: Number,
    required: [true, 'Veuillez ajouter les frais de scolarité']
  },
  minimumSkill: {
    type: String,
    required: [true, 'Veuillez ajouter une compétence minimale'],
    enum: ['débutant', 'intermédiaire', 'avancé']
  },
  
  scholarshipAvailable: {
    type: Boolean,
    default: false
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

// Static method to get avg of course tuitions
CourseSchema.statics.getAverageCost = async function(bootcampId) {
  const obj = await this.aggregate([
    {
      $match: { bootcamp: bootcampId }
    },
    {
      $group: {
        _id: '$bootcamp',
        averageCost: { $avg: '$tuition' }
      }
    }
  ]);

  try {
    await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
      averageCost: Math.ceil(obj[0].averageCost / 10) * 10
    });
  } catch (err) {
    console.error(err);
  }
};

// Call getAverageCost after save
CourseSchema.post('save', function() {
  this.constructor.getAverageCost(this.bootcamp);
});

// Call getAverageCost before remove
CourseSchema.pre('remove', function() {
  this.constructor.getAverageCost(this.bootcamp);
});





export default mongoose.model('Course', CourseSchema);