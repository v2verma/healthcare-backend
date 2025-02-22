import jwt from "jsonwebtoken"
import { JWT_SECRETE } from "../config/config.service.js";


const authenticate =(req,res,next)=>{
    const token = req.header("x-auth-token") || req.headers['authorization'];

    if(!token){
        res.status(401).json({error:"invalid auth"})
    }
    try{
        
    const decodedauth = jwt.decode(token,JWT_SECRETE);
    req.user = decodedauth.user;
    next();
    }catch(error){
        res.json({error:"invalid Auth"})
    }
}

export default authenticate;