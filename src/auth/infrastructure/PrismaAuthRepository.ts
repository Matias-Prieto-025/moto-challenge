import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { AuthRepository } from "../domain/AuthRepository";
import { AuthResultDTO } from "../domain/AuthResultDTO";
import { AuthUserDTO } from "../domain/AuthUserDTO";
import { AuthEmail } from "../domain/valueObjects/AuthEmail";
import { AuthPassword } from "../domain/valueObjects/AuthPassword";
import { AuthUserId } from "@auth/domain/valueObjects/AuthUserId";
import { AuthProvider } from "@auth/domain/valueObjects/AuthProvider";
import { AuthProviderId } from "@auth/domain/valueObjects/AuthProviderId";
import { AuthValidationError } from "@auth/domain/errors/AuthValidationError";

export class PrismaAuthRepository implements AuthRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async signUp(
    userId: AuthUserId,
    provider: AuthProvider,
    providerId: AuthProviderId,
    email: AuthEmail,
    password: AuthPassword,
  ): Promise<AuthUserDTO> {
    let authPassword: string | null = null;
    let authProviderId: string | null = null;
    
    if (provider.getShouldUsePassword()) {
      if (!password) {
        throw new AuthValidationError('Password is required for local provider');
      }
      authPassword = await this.hashPassword(password.value);
    }

    if (provider.getShouldUseProviderId()) {
      if (!providerId) {
        throw new AuthValidationError('Provider ID is required');
      }
      authProviderId = providerId.getValue() || null;
    }

    const authAccount = await this.prisma.authAccount.create({
      data: {
        id: userId.value,
        email: email.value,
        provider: provider.value,
        providerId: authProviderId,
        passwordHash: authPassword,
        user: {
          connect: {
            id: userId.value,
          },
        },
      },
    });

    return {
      id: authAccount.id, // TODO: fix or remove this
      email: authAccount.email,
      provider: authAccount.provider,
    };
  }

  async signIn(email: AuthEmail, password: AuthPassword): Promise<AuthResultDTO> {
    throw new Error("Method not implemented.");
  }

}