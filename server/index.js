import express from "express";
import Data from "./database/data.js";
import dotenv from "dotenv";
import Router from './routes/route.js'

dotenv.config()
const app = express()
const PORT = 8080;
app.use('/',Router);


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
const username= process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
Data(username,password)