import express, { urlencoded } from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import { connectDB } from './db/connectDB.js'



const app = express()

//middlewire
app.use(express.json())
app.use(urlencoded({extended:true}))       
app.use(cors())
app.use(cookieParser())

//routes
 app.use("/api/auth", authRoutes)
 
 
 const PORT =  process.env.PORT || 5000

 app.listen(PORT, () => {
       connectDB()
        console.log('Server is running on port ',PORT)
 })