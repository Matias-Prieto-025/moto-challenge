import { AuthUserId } from "../domain/valueObjects/AuthUserId";
import { AuthRepository } from "../domain/AuthRepository";
import { AuthUserDTO } from "../domain/AuthUserDTO";
import { AuthEmail } from "../domain/valueObjects/AuthEmail";
import { AuthName } from "../domain/valueObjects/AuthName";
import { AuthPassword } from "../domain/valueObjects/AuthPassword";
import { AuthProvider } from "../domain/valueObjects/AuthProvider";
import { AuthInternalServerError } from "../domain/errors/AuthInternalServerError";
import { UserCreate } from "@users/application/UserCreate";
import { AuthValidationError } from "../domain/errors/AuthValidationError";
import { AuthProviderId } from "@auth/domain/valueObjects/AuthProviderId";

export class AuthSignUp {
  constructor(
    private repository: AuthRepository,
    private userCreateUseCase: UserCreate,
  ) {}

  async execute(
    provider: string,
    providerId: string,
    email: string,
    password: string,
    name: string,
  ): Promise<AuthUserDTO> {
    const authProvider = new AuthProvider(provider);
    const shouldUseProviderId = authProvider.getShouldUseProviderId();
    const shouldUsePassword = authProvider.getShouldUsePassword();

    let authPassword: AuthPassword | null = null;
    let authProviderId: AuthProviderId | null = null;

    if (shouldUsePassword) {
      if (!password) {
        throw new AuthValidationError('Password is required for local provider');
      }
      authPassword = new AuthPassword(password);
    }

    if (shouldUseProviderId) {
      if (!providerId) {
        throw new AuthValidationError('Provider ID is required');
      }
      authProviderId = new AuthProviderId(providerId);
    }

    const authEmail = new AuthEmail(email);

    const user = await this.userCreateUseCase.execute(name, email);

    if (!user || !user.id) {
      throw new AuthInternalServerError('Error creating user');
    }

    const result = await this.repository.signUp(
      new AuthUserId(user.id.value),
      authProvider,
      authProviderId,
      authEmail,
      authPassword,
    );

    return {
      id: result.id,
      email: result.email,
      provider: result.provider,
    };
  }
}