import { isUUID } from "@shared/utils/isUUID";
import { UserValidationError } from "../errors/UserValidationError";

export class UserId {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate(): void {
    if (!this.value) {
      throw new UserValidationError('UserId cannot be empty');
    }

    if (!isUUID(this.value)) {
      throw new UserValidationError('UserId must be a valid UUID v4');
    }
  }

  getValue(): string {
    return this.value;
  }
}