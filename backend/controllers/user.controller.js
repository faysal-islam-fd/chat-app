import User from "../models/user.model.js"

export const getUsersForSidebar =async (req,res)=>{
    try{
        const userId = req.user._id
        const allUsers = await User.find({_id:{$ne:userId}}).select("-password")
        if(allUsers){
          return res.status(200).json({success:true,data:allUsers})
        }
        res.status(404).json({success:false,message:"No users found"})
    }
    catch(error){
        res.status(500).json({success:false,message: error.message})
    }
}