 import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

 export const protectRoute = async(req, res, next) => {
    try{
        const token = req.cookies?.token;
        if(!token){
            return res.status(401).json({success:false,message:"Unauthorize"})
        }
       const {id} =  jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({success:false,message:"User not found"})
        }
        req.user = user;
        next()
    }
    catch(error){
        res.status(401).json({success:false,message:"Unauthorize"})
    }
 }