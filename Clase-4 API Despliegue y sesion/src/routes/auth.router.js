import express from "express";
import { loginController, registerController } from "../controllers/auth.controller.js";

const auth_router = express.Router()


auth_router.post('/register', registerController)
auth_router.post('/login', loginController)


export default auth_router