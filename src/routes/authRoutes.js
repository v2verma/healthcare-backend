import express from 'express'
import { getUsers, login, register } from '../modules/auth/auth.controller.js';
import {  RegisterVallidationrules, validate,LoginVallidationrules } from '../middlewares/validators.js';
import auth from '../middlewares/authorization.js';

const authRouter = express.Router()

authRouter.post('/login',
    LoginVallidationrules(),
    validate,
     login)
authRouter.post('/register',
    RegisterVallidationrules(),
    validate,
    register)
authRouter.get('/users',auth, getUsers)



export default authRouter


