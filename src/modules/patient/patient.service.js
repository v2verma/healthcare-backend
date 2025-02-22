import Patient  from "../../models/Patient"

export const createPatient = async (patientData) => {
    try {
        // Ensure that the user_id exists in the User collection
        //   if (!user) {
        //     return res.status(404).json({ error: 'User not found' });
        //   }
  
      const newPatient = new Patient(patientData);
      await newPatient.save();
    } catch (err) {
        throw new Error('Error creating patient: ' + err.message);
    }
  };

export const getAllPatients = async ()=>{
    try {
        const patients = await Patient.find().populate('user');
        return patients;
      } catch (err) {
        throw new Error('Error fetching patients: ' + err.message);
      }
}

export const getPatientById = async (id) => {
    try {
      const patient = await Patient.findById(id).populate('user');
      if (!patient) {
        throw new Error('Patient not found');
      }
      return patient;
    } catch (err) {
      throw new Error('Error fetching patient: ' + err.message);
    }
  };

export const updatePatient = async (id, patientData) => {
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(id, patientData, { new: true });
      return updatedPatient;
    } catch (err) {
      throw new Error('Error updating patient: ' + err.message);
    }
  };

// Service to create a new patient
const createPatient = async (patientData) => {
    try {
      const newPatient = new Patient(patientData);
      await newPatient.save();
      return newPatient;
    } catch (err) {
      throw new Error('Error creating patient: ' + err.message);
    }
  };
