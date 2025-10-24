import express from 'express';
import { createTask, delteTask, getAllTask, updateTask  } from '../contrllers/taskController.js';
const router = express.Router();



router.get("/", getAllTask );

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", delteTask);

export default router;