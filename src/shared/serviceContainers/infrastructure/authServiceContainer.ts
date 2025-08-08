import { AuthSignUp } from "@auth/application/AuthSignUp";
import { AuthSignIn } from "@auth/application/AuthSignIn";
import { PrismaAuthRepository } from "@auth/infrastructure/PrismaAuthRepository";
import { JWTRepositoryImpl } from "@auth/infrastructure/JWTRepository";
import { UserServiceContainer } from "./userServiceContainer";

const authRepository = new PrismaAuthRepository();
const jwtRepository = new JWTRepositoryImpl();

export const AuthServiceContainer = {
  signUp: new AuthSignUp(authRepository, UserServiceContainer.create),
  signIn: new AuthSignIn(authRepository, jwtRepository),
}