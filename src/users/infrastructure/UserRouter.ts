import { Router } from "express";
import { UserController } from "./UserController";
import { jwtBearerMiddleware } from "@auth/infrastructure/middlewares/jwtMiddleware";

const userController = new UserController();

const userRouter = Router();

userRouter.get('/', jwtBearerMiddleware, userController.getAll);
userRouter.get('/:id', jwtBearerMiddleware, userController.getById);
userRouter.post('/', jwtBearerMiddleware, userController.create);
userRouter.put('/:id', jwtBearerMiddleware, userController.edit);
userRouter.delete('/:id', jwtBearerMiddleware, userController.delete);

export { userRouter };