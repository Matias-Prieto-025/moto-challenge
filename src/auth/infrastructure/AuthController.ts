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
      const { email, password, provider } = req.body;
      const result = await AuthServiceContainer.signIn.execute(email, password, provider);
      // Now Sending email to user with token in the request body. Probably send jwt in a cookie.
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}