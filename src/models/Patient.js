import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Types = Schema.Types;

// Define patient schema
const patientSchema = new Schema({
  emergencyContact: {
    name: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],
    },
  },
  allergies: [{
    substance: {
      type: String,
      required: true,
    },
    reaction: {
      type: String,
      required: true,
    },
  }],
  medications: [{
    name: {
      type: String,
      required: true,
    },
    dosage: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
    },
  }],
  primaryDoctor: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true
  },
  blood_group: {
    type: String,
  }
}, { timestamps: true });

// Middleware to update `updatedAt` before saving
patientSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create model
const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
