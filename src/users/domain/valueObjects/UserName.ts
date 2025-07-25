import { UserValidationError } from "../errors/UserValidationError";

export class UserName {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    if (this.value.length < 5) {
      throw new UserValidationError('UserName must be at least 5 characters long');
    }
  }
}