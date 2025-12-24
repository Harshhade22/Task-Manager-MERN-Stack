import express from "express";
import { createTask, deleteTask, getTask, updateTask } from "../controllers/taskCont.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getTask);
router.post("/create", authMiddleware, createTask);
router.put("/update/:id", authMiddleware, updateTask);
router.delete("/delete/:id", authMiddleware, deleteTask);

export default router;
