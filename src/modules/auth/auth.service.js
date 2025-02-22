import User from "../../models/User.js";

export const getUsersData =async (req,res)=>{
   try{
    const usersData = await User.find()
    return usersData
   }
   catch(err){
    throw new Error(err)
   }
}