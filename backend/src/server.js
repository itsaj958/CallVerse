import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';

import {connectDB} from './lib/db.js'; 

const app = express()
const port = process.env.PORT ;

//
app.use(express.json()); //middleware to parse JSON bodies.  if we don't have this,data in req.body will be undefined.
app.use(cookieParser()); //middleware to parse cookies from incoming requests.

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB();
})
