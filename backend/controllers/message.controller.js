import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const sendMessage = async (req, res) => {
    const {message} = req.body;
    
    try{
        if(!message){
            return res.status(400).json({success:false,message:"Message is required"})
        }
       
        
        const {receiverId} = req.params;
        
        const senderId = req.user._id;
        const receiverUser = await User.findById(receiverId);
        
        console.log(receiverUser);
        
        if(!receiverUser){
            return res.status(404).json({success:false,message:"Receiver not found"})
        }
        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        });

        
        if(!conversation){
                
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await newMessage.save();
        await conversation.save();
        res.status(201).json({success:true,data:newMessage}) 


    }
     catch(error){
        res.status(500).json({success:false,message: error.message}) 
     }
}