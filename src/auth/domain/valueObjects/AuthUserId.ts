import { isUUID } from "@shared/utils/isUUID";
import { AuthValidationError } from "../errors/AuthValidationError";

export class AuthUserId {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    if (!this.value) {
      throw new AuthValidationError('Auth user id is required');
    }

    if (!isUUID(this.value)) {
      throw new AuthValidationError('Auth user id must be a valid UUID v4');
    }
  }
}