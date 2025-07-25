import { AuthValidationError } from "../errors/AuthValidationError";

export class AuthName {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    if (this.value.length < 5) {
      throw new AuthValidationError('Auth name must be at least 5 characters long');
    }
  }
}