import express from 'express';
import authRouter from './auth.route.js';
// import patientRouter from './patient.route.js';
import auth from "../middlewares/authorization.js";


const router = express.Router()

router.use('/auth',authRouter)
// router.use('/patient',patientRouter)



export default router