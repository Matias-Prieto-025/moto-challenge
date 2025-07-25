import { BaseError } from "./BaseError";

export class ResourceNotFoundError extends BaseError {
  constructor(name: string = 'ResourceNotFoundError', message: string) {
    super(name, message, 404);
  }
}