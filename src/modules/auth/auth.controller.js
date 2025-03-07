import { JWT_SECRETE } from "../../config/config.service.js";
import User from "../../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getUsersData } from "./auth.service.js";
import {successResponse, errorResponse} from '../../utils/construct-response.js';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("User not found");
        }
        console.log(user, "user");
    
        const isPasswordMaching = await bcrypt.compare(password, user.password)
        console.log(isPasswordMaching,"userCheck")
    
        const payload = {
            user: user.id
        }
        isPasswordMaching && jwt.sign(payload, JWT_SECRETE, { expiresIn: 3600 * 24 }, (error, token) => {
            if (error) throw error;
            res.json({ token })
        })
    } catch (error) {
        errorResponse(res, 400, 'Failed to login. Please check credentials', error.message);
    }
    
}

export const register = async (req, res) => {
    const { firstName, lastName, email, password, dateOfBirth, phone, gender, status, role, city, state, zipCode } = req.body;

    const user = new User({
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
        phone,
        gender,
        status,
        role,
        city,
        state,
        zipCode
    })

    try {

        //check is user Already Exist
        const isUserExist = await User.findOne({ email: email })
        if (isUserExist) {
            return res.json({ message: "user  Already Exist " })
        }

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt)
        user.save();

        // create jwt sign and send token
        jwt.sign({ user: { id: user.id } }, JWT_SECRETE, { expiresIn: 3600 * 24 }, (error, token) => {
            if (error) throw error
            res.json({ token })
        })
    }
    catch (error) {
        errorResponse(res, 400, 'Failed to create user', error.message);
        throw error;
    }
}


export const getUsers = async (req, res) => {
    try {
        const users = await getUsersData()
        res.send(users)
    } catch (error) {
        res.status(5001)
            .json({ error: "error in fetching users" })
    }
}
