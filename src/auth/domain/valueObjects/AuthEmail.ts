import { AuthValidationError } from "../errors/AuthValidationError";

export class AuthEmail {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.value)) {
      throw new AuthValidationError('Auth email must be a valid email address');
    }
  }
}