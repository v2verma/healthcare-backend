import {createPatientService, getAllPatientsService, getPatientByIdService, updatePatientService} from './patient.service.js';
import {successResponse, errorResponse} from '../../utils/construct-response.js';

export const createPatient = async (req, res) => {
    try {
      const patientData = req.body;
      const newPatient = await createPatientService(patientData);
      successResponse(res, 201, 'Patient created successfully', newPatient);
    } catch (error) {
        errorResponse(res, 400, 'Failed to create patient', error.message);
    }
};

export const getAllPatients = async (req, res) => {
    try {
      console.log("Get all patients")
      const patients = await getAllPatientsService();
      successResponse(res, 200, 'Patient lists', patients);
    } catch (error) {
      errorResponse(res, 400, 'Failed to fetch patients', error.message);
    }
  };
  
export const getPatientById = async (req, res) => {
    try {
      const { id } = req.params;
      const patient = await getPatientByIdService(id);
      successResponse(res, 200, 'Patient fetched successfully', patient);
    } catch (error) {
        errorResponse(res, 400, 'Failed to fetch patient', error.message);
    }
  };

export const updatePatient = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedPatientData = req.body;
      const updatedPatient = await updatePatientService(id, updatedPatientData);
      successResponse(res, 200, 'Patient updated successfully', updatedPatient);
    } catch (error) {
      errorResponse(res, 400, 'Failed to update patient', error.message);
    }
  };
