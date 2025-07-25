export class BaseError extends Error {
  private readonly status: number;

  constructor(name: string, message: string, status: number = 400) {
    super(message);
    this.name = name;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}