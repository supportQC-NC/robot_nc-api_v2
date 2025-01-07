
import mongoose from 'mongoose'
import slugify from 'slugify'

const BootcampSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Veuillez ajouter un nom'],
      unique: true,
      trim: true,
      maxlength: [50, 'Le nom ne peut pas dépasser 50 caractères']
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'Veuillez ajouter une description.'],
      maxlength: [500, 'La description ne peut pas dépasser 500 caractères.']
    },
    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Veuillez utiliser une URL valide avec HTTP ou HTTPS'
      ]
    },
    phone: {
      type: String,
      maxlength: [20, 'Le numéro de téléphone ne peut pas dépasser 20 caractères']
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Veuillez ajouter un email valide'
      ]
    },
   

    careers: {
      // Array of strings
      type: [String],
      required: true,
      enum: [
        'Web Development',
        'Mobile Development',
        'UI/UX',
        'Data Science',
        'Business',
        'Other'
      ]
    },
    averageRating: {
      type: Number,
      min: [1, 'La note doit être d’au moins 1'],
      max: [10, 'La note ne peut pas dépasser 10.']
    },
    averageCost: Number,
    photo: {
      type: String,
      default: 'no-photo.jpg'
    },
    housing: {
      type: Boolean,
      default: false
    },
    jobAssistance: {
      type: Boolean,
      default: false
    },
    jobGuarantee: {
      type: Boolean,
      default: false
    },
    acceptGi: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Create bootcamp slug from the name
BootcampSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});


// Cascade delete courses when a bootcamp is deleted
BootcampSchema.pre('remove', async function(next) {
  console.log(`Courses being removed from bootcamp ${this._id}`);
  await this.model('Course').deleteMany({ bootcamp: this._id });
  next();
});

// Reverse populate with virtuals
BootcampSchema.virtual('courses', {
  ref: 'Course',
  localField: '_id',
  foreignField: 'bootcamp',
  justOne: false
});


export default mongoose.model('Bootcamp', BootcampSchema);