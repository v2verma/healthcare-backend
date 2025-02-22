import express from 'express'
import { getPatientById, getAllPatients, updatePatient, createPatient } from '../modules/patient/patient.controller.js';
import authenticate from '../middlewares/authorization.js';

const patientRouter = express.Router()

patientRouter.get('/:id', authenticate, getPatientById);
patientRouter.get('/', authenticate, getAllPatients);
patientRouter.put('/:id', authenticate, updatePatient);
patientRouter.post('/', authenticate, createPatient);

export default patientRouter
