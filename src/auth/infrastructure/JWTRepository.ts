import jwt from "jsonwebtoken";
import { AuthValidationError } from "@auth/domain/errors/AuthValidationError";
import { JWTRepository } from "@auth/domain/JWTRepository";

export class JWTRepositoryImpl implements JWTRepository {
	constructor() {}

  async generateJWT(payload: object): Promise<string> {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN || 3600;

    if (!secret || !expiresIn) {
      throw new AuthValidationError('Error generating JWT');
    }

    return jwt.sign(payload, secret, { expiresIn: Number(expiresIn) });
  }
}