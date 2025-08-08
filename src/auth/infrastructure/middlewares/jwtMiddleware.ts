import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthValidationError } from "@auth/domain/errors/AuthValidationError";

export function jwtBearerMiddleware(req: Request, res: Response, next: NextFunction) {
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN;

  if (!secret || !expiresIn) {
    throw new AuthValidationError('Error getting JWT data');
  }

  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ')
      ? authHeader.split(' ')[1]
      : null;

    if (!token) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const decoded = jwt.verify(token, secret);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}