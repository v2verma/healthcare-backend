import express from 'express'
import { getPatientById, getAllPatients, updatePatient, createPatient } from '../modules/patient/patient.controller.js';
import { validate } from '../middlewares/validators.js';
import auth from '../middlewares/authorization.js';

const patientRouter = express.Router()

patientRouter.get('/:id', validate(), getPatientById)
patientRouter.get('/',auth, getAllPatients)
patientRouter.put('/',auth, updatePatient)
patientRouter.post('/',auth, createPatient)

export default patientRouter
