import { AuthValidationError } from "../errors/AuthValidationError";

export class AuthPassword {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    if (this.value.length < 8) {
      throw new AuthValidationError('Auth password must be at least 8 characters long');
    }
  }
}