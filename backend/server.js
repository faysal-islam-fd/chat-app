import express, { urlencoded } from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { connectDB } from './db/connectDB.js'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'


const app = express()

//middlewire
app.use(express.json())
app.use(urlencoded({extended:true}))       
app.use(cors())
app.use(cookieParser())

//routes
 app.use("/api/auth", authRoutes)
 app.use("/api/message", messageRoutes)
 
 const PORT =  process.env.PORT || 5000

 app.listen(PORT, () => {
       connectDB()
        console.log('Server is running on port ',PORT)
 })