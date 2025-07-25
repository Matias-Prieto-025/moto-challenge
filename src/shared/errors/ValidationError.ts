import { BaseError } from "./BaseError";

export class ValidationError extends BaseError {
  constructor(name: string = 'ValidationError', message: string) {
    super(name, message, 400);
  }
}