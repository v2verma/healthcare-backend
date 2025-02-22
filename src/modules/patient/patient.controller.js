import patientService from './patientService';
import {successResponse, errorResponse} from '../../utils/construct-response';

export const createPatient = async (req, res) => {
    try {
      const patientData = req.body;
      const newPatient = await patientService.createPatient(patientData);
      successResponse(res, 201, 'Patient created successfully', newPatient);
    } catch (error) {
        errorResponse(res, 400, 'Failed to create patient', error.message);
    }
};

export const getAllPatients = async (req, res) => {
    try {
      const patients = await patientService.getAllPatients();
      successResponse(res, 200, 'Patient lists', patients);
    } catch (error) {
      errorResponse(res, 400, 'Failed to fetch patients', error.message);
    }
  };
  
export const getPatientById = async (req, res) => {
    try {
      const { id } = req.params;
      const patient = await patientService.getPatientById(id);
      successResponse(res, 200, 'Patient fetched successfully', patient);
    } catch (error) {
        errorResponse(res, 400, 'Failed to fetch patient', error.message);
    }
  };

export const updatePatient = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedPatientData = req.body;
      const updatedPatient = await patientService.updatePatient(id, updatedPatientData);
      successResponse(res, 200, 'Patient updated successfully', updatedPatient);
    } catch (error) {
        errorResponse(res, 400, 'Failed to update patient', error.message);
    }
  };
