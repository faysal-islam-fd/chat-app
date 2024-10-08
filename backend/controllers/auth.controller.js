import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signup = async (req,res)=>{
    console.log(req.body);
    
    try{
        const {fullname,username,password,confirmPassword,gender} = req.body;
        if(!fullname){
            return res.status(400).json({success:false,message:"Please enter your fullname."})
        }
        if(!username){
            return res.status(400).json({success:false,message:"Please enter your username."})
        }
        if(!password){
            return res.status(400).json({success:false,message:"Please enter your password."})
        }
        if(password.length<6){
            return res.status(400).json({success:false,message:"Password must be at least 6 characters."})
        }
        if(password !== confirmPassword){
            return res.status(400).json({success:false,message:"password didn't match."})
        }

        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({success:false,message:"This username already exists."})
        }
        const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const salt = await bcrypt.genSaltSync(10)
        const hashedPass = await bcrypt.hashSync(password,salt)
        const newUser = new User({
            fullname,
            username,
            password:hashedPass,
            gender,
            profilePic: gender  === "male" ? boyPic : girlPic,
        })
        //add jwt token
        generateTokenAndSetCookie(newUser._id,res)
        await newUser.save()
        return res.status(200).json({success:true,user:{ 
            _id:newUser._id,
            fullname:newUser.fullname,
            username:newUser.username,
            profilePic:newUser.profilePic,
        }})

    }
     catch(error){
        res.status(500).json({success:false,message:error.message})
     }

}
export const login = async (req,res)=>{
    try{
        const {username,password} = req.body;
        if(!username){
            return res.status(400).json({success:false,message:"Please enter your username."})
        }
        if(!password){
            return res.status(400).json({success:false,message:"Please enter your password."})
        }
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({success:false,message:"User not found!"})

        }
        const comparePass = await bcrypt.compareSync(password, user.password)
        if(!comparePass){
            return res.status(400).json({success:false,message:"Invalid password!"})
        }
        //set jwt token as cookie
        generateTokenAndSetCookie(user._id,res)
        return res.status(200).json({success:true,user:{ 
            _id:user._id,
            fullname:user.fullname,
            username:user.username,
            profilePic:user.profilePic,
        }})
    }
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
}

export const logout = (req,res)=>{
    try{
        res.cookie("token","",{maxAge:1}).json({success:true,message:"Logged out successfully."})
    }   
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
} 