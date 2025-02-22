import express from 'express'
import { getUsers, login, register } from '../modules/auth/auth.controller.js';
import { registerValidationRules, validate, loginValidationRules } from '../middlewares/validators.js';
import auth from '../middlewares/authorization.js';

const authRouter = express.Router()

authRouter.post('/login',
    loginValidationRules(),
    validate,
     login)
authRouter.post('/register',
    registerValidationRules(),
    validate,
    register)
authRouter.get('/users',auth, getUsers)

export default authRouter;
