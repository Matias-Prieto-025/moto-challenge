import { NextFunction, Request, Response } from "express";
import { AuthServiceContainer } from "@shared/serviceContainers/infrastructure/authServiceContainer";

export class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { provider, providerId, email, password, name } = req.body;

      const result = await AuthServiceContainer.signUp.execute(
        provider,
        providerId,
        email,
        password,
        name,
      );
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await AuthServiceContainer.signIn.execute(email, password);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}