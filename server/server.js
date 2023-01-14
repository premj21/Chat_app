import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './userRoutes/userRouter.js';
import conndb from './config/dbcn.js';
dotenv.config({path:'./config/config.env'});
const app = express(); 
app.use(express.json());
app.use(cors());
conndb();
app.use('/api/user',userRouter); 
app.listen(process.env.PORT,()=>{
    console.log(`server is running`); 
})