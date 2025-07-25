import { BaseError } from "./BaseError";

export class InternalServerError extends BaseError {
  constructor(name: string = 'InternalServerError', message: string) {
    super(name, message, 500);
  }
}