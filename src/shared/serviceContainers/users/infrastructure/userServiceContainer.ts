import { UserGetAll } from "@users/application/UserGetAll";
import { UserGetById } from "@users/application/UserGetById";
import { UserCreate } from "@users/application/UserCreate";
import { UserEdit } from "@users/application/UserEdit";
import { UserDelete } from "@users/application/UserDelete";
import { PrismaUserRepository } from "@users/infrastructure/PrismaUserRepository";

const userRepository = new PrismaUserRepository();

export const UserServiceContainer = {
  getAll: new UserGetAll(userRepository),
  getById: new UserGetById(userRepository),
  create: new UserCreate(userRepository),
  edit: new UserEdit(userRepository),
  delete: new UserDelete(userRepository),
}
