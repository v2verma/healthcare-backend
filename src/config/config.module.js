import mongoose from 'mongoose'
import {DB_URL} from './index.js'

export const connectDb = async() =>{
    try{        
        await mongoose.connect(DB_URL,      
            {});
        console.log("DB connected successfully")
    }catch(error){
        console.log(error,"error in db connection")
    }
}