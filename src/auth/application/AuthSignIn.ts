import { AuthRepository } from "../domain/AuthRepository";
import { AuthResultDTO } from "../domain/AuthResultDTO";
import { AuthEmail } from "../domain/valueObjects/AuthEmail";
import { AuthPassword } from "../domain/valueObjects/AuthPassword";

export class AuthSignIn {
  constructor(private repository: AuthRepository) {}

  async execute(email: string, password: string): Promise<AuthResultDTO> {
    const authEmail = new AuthEmail(email);
    const authPassword = new AuthPassword(password);

    const result = await this.repository.signIn(authEmail, authPassword);

    return result;
  }
}   