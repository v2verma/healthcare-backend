import User from "../../models/User.js";

export const getUsersData =async (req,res)=>{
    const usersData = await User.find()
    return usersData
}