import express from "express";
import { loginUser, registerUser } from "../controllers/authContollers.js";


const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", loginUser);

export default routes;
