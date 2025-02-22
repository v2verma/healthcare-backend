import Patient  from "../../models/Patient.js"

export const createPatientService = async (patientData) => {
    try {
        // Ensure that the user_id exists in the User collection
        const user = await UserActivation.findById(patientData.user);
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }

      const newPatient = new Patient(patientData);
      await newPatient.save();
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
