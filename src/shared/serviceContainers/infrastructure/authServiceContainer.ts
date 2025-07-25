import { AuthSignUp } from "@auth/application/AuthSignUp";
import { AuthSignIn } from "@auth/application/AuthSignIn";
import { PrismaAuthRepository } from "@auth/infrastructure/PrismaAuthRepository";
import { UserCreate } from "@users/application/UserCreate";
import { UserRepository } from "@users/domain/UserRepository";
import { PrismaUserRepository } from "@users/infrastructure/PrismaUserRepository";

const authRepository = new PrismaAuthRepository();
const userRepository = new PrismaUserRepository();
const userCreateUseCase = new UserCreate(userRepository);

export const AuthServiceContainer = {
  signUp: new AuthSignUp(authRepository, userCreateUseCase),
  signIn: new AuthSignIn(authRepository),
}