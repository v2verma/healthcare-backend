import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define user schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  dateOfBirth: {
    type: Date,
  },
  phone: {
    type: String,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
  },
  role: {
    type: String,
    enum: ['provider', 'patient'],
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create model
const User = mongoose.model('User', userSchema);

export default User;
