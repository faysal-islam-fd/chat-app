import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    const {message} = req.body;
    
    try{
        if(!message){
            return res.status(400).json({success:false,message:"Message is required"})
        }
       
        
        const {receiverId} = req.params;
        
        const senderId = req.user._id;
        const receiverUser = await User.findById(receiverId);

        
        if(!receiverUser){
            return res.status(404).json({success:false,message:"Receiver not found"})
        }
        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        });

    
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([newMessage.save(),conversation.save()])
        
        const receiverSocketId = getReceiverSocketId(receiverId)
        
        if(receiverSocketId){
            //io.to(<socket id>).emit() used to send a specific client
           
                 
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json({success:true,data:newMessage}) 


    }
     catch(error){
        res.status(500).json({success:false,message: error.message}) 
     }
}

export const getMessages = async (req, res) => {
    try{
        const {userId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,userId]}
        }).populate({
            path: 'messages',
            select: 'message senderId receiverId createdAt',
        });
        
        if(!conversation){
                
                
            conversation = await Conversation.create({
                participants:[senderId,userId]
            })
            conversation.save()
            return res.status(201).json({success:true,data:[]})
        }
        res.status(200).json({success:true,data:conversation.messages}) 
    }catch(error){
        res.status(500).json({success:false,message: ""}) 
    }
}