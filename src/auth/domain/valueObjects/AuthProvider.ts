import { AuthValidationError } from "../errors/AuthValidationError";

export class AuthProvider {
  readonly value: string;
  readonly allowedProviders: string[] = ['local', 'google'];

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    if (!this.value) {
      throw new AuthValidationError('Auth provider is required');
    }

    if (!this.allowedProviders.includes(this.value)) {
      throw new AuthValidationError('Auth provider must be a valid provider');
    }
  }

  public getAllowedProviders(): string[] {
    return this.allowedProviders;
  }

  public getShouldUseProviderId(): boolean {
    if (this.value === 'local') {
      return false;
    }
    return this.allowedProviders.includes(this.value);
  }

  public getShouldUsePassword(): boolean {
    return this.value === 'local';
  }
}