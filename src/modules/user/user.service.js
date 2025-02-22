import User  from "../../models/User"

export const getUsersData =async (req,res)=>{
    const usersData = await User.find()
    return usersData
}