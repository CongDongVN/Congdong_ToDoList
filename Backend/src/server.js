import express from 'express';
import taskRoute from './routes/taskRouters.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT
const app = express();

// middlewares
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true
}));
app.use("/api/tasks",taskRoute)

connectDB().then(() =>{
    app.listen(PORT, () => {
    console.log(`"Server starts on port ${PORT}"`);
    });
});
// fix lỗi ko chạy được Frontend



