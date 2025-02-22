import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Types = Schema.Types;

// Define provider schema
const providerSchema = new Schema({
    qualification: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    licenseNumber: {
        type: String,
    },
    licenseExpiry: {
        type: Date,
    },
    consultationFee: {
        type: Number,
    },
    availability: {
        type: [String]
    },
    ratings: {
        type: Number,
    },
    user: {
        type: Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true
    }
}, { timestamps: true });

// Middleware to update `updatedAt` before saving
providerSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create model
const Provider = mongoose.model('Provider', providerSchema);

export default Provider;
