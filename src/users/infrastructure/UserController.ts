import { NextFunction, Request, Response } from "express";
import { UserServiceContainer } from "@shared/serviceContainers/infrastructure/userServiceContainer";
import { UserNotFoundError } from "../domain/errors/UserNotFoundError";

export class UserController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserServiceContainer.getAll.execute();
      return res.status(200).json(users.map(user => user.mapToPrimitives()));
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await UserServiceContainer.getById.execute(id);
      return res.status(200).json(user.mapToPrimitives());
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: 'User not found' });
      }
      next(error);
    }
  }
  
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;
      const user = await UserServiceContainer.create.execute(name, email);

      return res.status(201).json(user.mapToPrimitives());
    } catch (error) {
      next(error);
    }
  }
  
  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = await UserServiceContainer.edit.execute(id, name, email);

      return res.status(200).json(user.mapToPrimitives());
    } catch (error) {
      next(error);
    }
  }
  
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await UserServiceContainer.delete.execute(id);

      return res.status(200).json(user.mapToPrimitives());
    } catch (error) {
      next(error);
    }
  } 
}
