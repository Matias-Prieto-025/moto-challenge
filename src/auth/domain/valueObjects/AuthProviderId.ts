import { AuthValidationError } from "../errors/AuthValidationError";

export class AuthProviderId {
  private readonly value: string | undefined;

  constructor(value?: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    if (!this.value) {
      throw new AuthValidationError('Provider ID is required');
    }
  }

  public getValue(): string | undefined {
    return this.value;
  }
} 