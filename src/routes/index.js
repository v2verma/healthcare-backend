import express from 'express';
import authRouter from './authRoutes.js';
import auth from "../middlewares/authorization.js";


const router = express.Router()

router.use('/auth',authRouter)



export default router