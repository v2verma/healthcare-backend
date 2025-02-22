import { body, validationResult, check } from "express-validator";


export const RegisterVallidationrules = () => {
    return [
        check('name', "name is required").not().isEmpty(),
        check('email', "please enter valid email").isEmail(),
        check('password', "passowrd is required").isLength({ min: 6 }),
        check('role', "role is required").not().isEmpty(),
        check('schoolId', "school is required").not().isEmpty()
    ]

}

export const LoginVallidationrules = () => {
    return [
        check('email', "please enter valid email").isEmail(),
        check('password', "passowrd is required").isLength({ min: 6 }),
    ]

}

export const validate = (req, res, next) => {
    const errors = validationResult(req)    
    
    if (errors.isEmpty()) {
        return next();
    }
    let exctractedErrors = []
    errors.array().map(err => exctractedErrors.push(err.msg ))
    res.send({error:exctractedErrors})
}
