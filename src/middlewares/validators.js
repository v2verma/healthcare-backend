import { body, validationResult, check } from "express-validator";


export const RegisterVallidationrules = () => {
    return [
        check('firstName', "First name is required").not().isEmpty(),
        check('lastName', "Last name is required").not().isEmpty(),
        check('email', "Please enter a valid email address").isEmail(),
        check('password', "Password is required").isLength({ min: 6 }),
        check('dateOfBirth', "Invalid date of birth").optional().isDate(),
        check('phone', "Please enter a valid 10-digit phone number").optional().isLength({ min: 10, max: 10 }).isNumeric(),
        check('gender', "Gender must be either 'male' or 'female'").optional().isIn(['male', 'female']),
        check('status', "Status must be either 'active' or 'inactive'").optional().isIn(['active', 'inactive']),
        check('role', "Role must be either 'provider' or 'patient'").optional().isIn(['provider', 'patient']),
        check('city', "City is required").not().isEmpty(),
        check('state', "State is required").not().isEmpty(),
        check('zipCode', "Zip code is required").not().isEmpty().isLength({ min: 5, max: 5 }).isNumeric()
    ];

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
    errors.array().map(err => exctractedErrors.push(err.msg))
    res.send({ error: exctractedErrors })
}
