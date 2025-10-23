import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import authRoutes from './routes/auth.route.js';
import {connectDB} from './lib/db.js';
const app = express()
const port = process.env.PORT ;

app.use(express.json()); //middleware to parse JSON bodies.  if we don't have this,data in req.body will be undefined.
app.use("/api/auth", authRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB();
})
