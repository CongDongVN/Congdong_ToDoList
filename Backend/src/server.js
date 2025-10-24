import express from 'express';
import taskRoute from './routes/taskRouters.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT
const __dirname = path.resolve();
const app = express();

// middlewares
app.use(express.json());
if(process.env.NODE_ENV !== 'production'){
  app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true
}));
}
app.use("/api/tasks",taskRoute)

if(process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname, "../Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});
}



connectDB().then(() =>{
    app.listen(PORT, () => {
    console.log(`"Server starts on port ${PORT}"`);
    });
});
// fix lỗi ko chạy được Frontend



