import { Router } from "express";
import { AuthController } from "./AuthController";

const authController = new AuthController();

const authRouter = Router();

authRouter.post('/signup', authController.signUp);
authRouter.post('/signin', authController.signIn);

export { authRouter };