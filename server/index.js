import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();

dotenv.config();
//Middleware
app.use(cors());
app.use(express.json());

connectDB();

// //routes
app.use("/api/task", taskRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
