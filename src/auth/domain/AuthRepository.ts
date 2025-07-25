import { AuthResultDTO } from "./AuthResultDTO";
import { AuthUserDTO } from "./AuthUserDTO";
import { AuthEmail } from "./valueObjects/AuthEmail";
import { AuthPassword } from "./valueObjects/AuthPassword";
import { AuthProvider } from "./valueObjects/AuthProvider";
import { AuthProviderId } from "./valueObjects/AuthProviderId";
import { AuthUserId } from "./valueObjects/AuthUserId";

export interface AuthRepository {
  signIn(email: AuthEmail, password: AuthPassword): Promise<AuthResultDTO>;
  signUp(
    userId: AuthUserId,
    provider: AuthProvider,
    providerId: AuthProviderId | null,
    email: AuthEmail,
    password: AuthPassword | null,
  ): Promise<AuthUserDTO>;
}
