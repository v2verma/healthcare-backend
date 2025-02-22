import Patient  from "../../models/Patient.js"
import User  from "../../models/User.js"
import Activity  from "../../models/Activity.js"

export const createPatientService = async (patientData) => {
    try {
        // Ensure that the user_id exists in the User collection
        const user = await User.findById(patientData.user);
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }

      const newPatient = new Patient(patientData);
      await newPatient.save();
      return newPatient;
    } catch (err) {
        throw new Error('Error creating patient: ' + err.message);
    }
  };

export const getAllPatientsService = async ()=>{
    try {
        const patients = await Patient.find().populate('user', 'name email');
        return patients;
      } catch (err) {
        throw new Error('Error fetching patients: ' + err.message);
      }
}

export const getPatientByIdService = async (id) => {
    try {
      const patient = await Patient.findById(id).populate('user', 'name email');
      if (!patient) {
        throw new Error('Patient not found');
      }
      return patient;
    } catch (err) {
      throw new Error('Error fetching patient: ' + err.message);
    }
  };

export const updatePatientService = async (id, patientData) => {
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(id, patientData, { new: true });
      return updatedPatient;
    } catch (err) {
      throw new Error('Error updating patient: ' + err.message);
    }
  };

  export const createActivityService = async (activityData, patientId) => {
    try {
        // Ensure that the patient_id exists in the User collection
        const patient = await Patient.findById(patientId);
          if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
          }
      activityData.patient_id = patientId;
      const newActivity = new Activity(activityData);
      await newActivity.save();
      return newActivity;
    } catch (err) {
        throw new Error('Error creating activity: ' + err.message);
    }
  };

  export const getAllActivitiesForPatientService = async (patientId)=>{
    try {
        const activities = await Activity.find({'patient_id': patientId});
        return activities;
      } catch (err) {
        throw new Error('Error fetching activities: ' + err.message);
      }
}