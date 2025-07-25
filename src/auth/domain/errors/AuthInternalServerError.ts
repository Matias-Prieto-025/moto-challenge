import { InternalServerError } from "@shared/errors/InternalServerError";

export class AuthInternalServerError extends InternalServerError {
  constructor(message: string) {
    super('AuthInternalServerError', message);
  }
}