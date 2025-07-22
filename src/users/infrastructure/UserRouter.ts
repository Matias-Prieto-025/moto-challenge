import { Router } from "express";
import { UserController } from "./UserController";

const userController = new UserController();

const userRouter = Router();

userRouter.get('/users/', userController.getAll);
userRouter.get('/users/:id', userController.getById);
userRouter.post('/users/', userController.create);
userRouter.put('/users/:id', userController.edit);
userRouter.delete('/users/:id', userController.delete);

export { userRouter };