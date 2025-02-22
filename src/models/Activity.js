import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Types = Schema.Types;

// Define the Activity Schema
const activitySchema = new Schema({
  patient_id: { 
    type: Types.ObjectId, 
    ref: 'Patient',  // Reference to the Patient model
    required: true 
  },
  type: {
    type: String,  // Type of activity (e.g., sleep, drinkingwater, steps, etc.)
    required: true
  },
  start_date: { 
    type: Date,
  },
  end_date: { 
    type: Date,
  },
  duration_in_minutes: {
    type: Number,
  },
  steps: { 
    type: Number,  // Distance covered in kilometers (optional, e.g., for running or cycling)
    default: 0 
  },
  goal: {
    type: Number,
  },
  notes: { 
    type: String,  // Additional notes (optional)
    default: ''
  }
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Export the Activity model
const Activity =  mongoose.model('Activity', activitySchema);

export default Activity;
