import path from 'path'
import express, { urlencoded } from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './db/connectDB.js'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import { app, server } from './socket/socket.js'




const __dirname = path.resolve()
//middlewire
app.use(express.json())
app.use(urlencoded({extended:true}))       
app.use(cors())
app.use(cookieParser())

//routes
 app.use("/api/auth", authRoutes)
 app.use("/api/message", messageRoutes)
 app.use("/api/users", userRoutes)

 app.use(express.static(path.join(__dirname, '/frontend/dist')))
 app.get("*", (req, res) => {
       res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
 })
 const PORT =  process.env.PORT || 5000
 
 server.listen(PORT, () => {
       connectDB()
        console.log('Server is running on port ',PORT)
 })