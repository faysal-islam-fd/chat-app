import http from 'http'
import {Server} from 'socket.io'
import express from 'express'

const app = express()

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET", "POST"]
    }
})

const userSocketMap = {} //{userId: socketId}

export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId]
}

io.on("connection",(socket)=>{
    const userId = socket.handshake.query.userId;
    if(userId!="undefined") userSocketMap[userId] = socket.id

    //io.emit is used to send events to all clients..
    
    io.emit("onlineUsers",Object.keys(userSocketMap))

    //socket.on is used to listen events both in client & server side..
    socket.on("disconnect",(socket)=>{
        delete userSocketMap[userId]
        io.emit("onlineUsers",Object.keys(userSocketMap))
       
    })
    
})

export {app,io,server}
