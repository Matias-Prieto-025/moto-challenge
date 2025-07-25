import { ValidationError } from "@shared/errors/ValidationError";

export class AuthValidationError extends ValidationError {
  constructor(message: string) {
    super('AuthValidationError', message);
  }
}