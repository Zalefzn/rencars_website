import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import routerUser from './components/routerUser.js';
dotenv.config();
const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(routerUser);
 
app.listen(3007, ()=> console.log('Server running at port 3007'));