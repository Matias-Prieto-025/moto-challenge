import { Router } from "express";
import { UserController } from "./UserController";

const userController = new UserController();

const userRouter = Router();

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);
userRouter.post('/', userController.create);
userRouter.put('/:id', userController.edit);
userRouter.delete('/:id', userController.delete);

export { userRouter };