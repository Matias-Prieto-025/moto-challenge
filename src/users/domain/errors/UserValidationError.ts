import { ValidationError } from "@shared/errors/ValidationError";

export class UserValidationError extends ValidationError {
  constructor(message: string) {
    super('UserValidationError', message);
  }
}