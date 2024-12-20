import express from "express";
import  constants  from "./constants/secrets.js";
import { dbConnection } from "./config/dbconfig.js";
const {PORT} = constants

const app = express();
dbConnection()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/user',)
app.listen(PORT,()=>console.log('server running'))