import { AuthRepository } from "../domain/AuthRepository";
import { AuthResultDTO } from "../domain/AuthResultDTO";
import { AuthEmail } from "../domain/valueObjects/AuthEmail";
import { AuthPassword } from "../domain/valueObjects/AuthPassword";
import { AuthProvider } from "../domain/valueObjects/AuthProvider";

import { UserServiceContainer } from "@shared/serviceContainers/infrastructure/userServiceContainer";
import { JWTRepository } from "@auth/domain/JWTRepository";
import { AuthValidationError } from "@auth/domain/errors/AuthValidationError";

export class AuthSignIn {
  constructor(
    private repository: AuthRepository,
    private jwtRepository: JWTRepository,
  ) {}

  async execute(email: string, password: string, provider: string): Promise<AuthResultDTO> {
    const authEmail = new AuthEmail(email);
    const authPassword = new AuthPassword(password);
    const authProvider = new AuthProvider(provider);

    const authUserId = await this.repository.signIn(authEmail, authPassword, authProvider);
    const user = await UserServiceContainer.getById.execute(authUserId.value);

    if (!user) {
      throw new AuthValidationError('User not found');
    }

    const token = await this.jwtRepository.generateJWT({ 
      sub: user.id?.value,
      email: user.email.value,
      name: user.name.value,
    });

    return {
      user: {
        email: user.email.value,
        provider: authProvider.value,
      },
      token,
    };
  }
}   