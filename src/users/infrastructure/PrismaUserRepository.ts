import { PrismaClient } from "@prisma/client";
import { ValidationError } from "@shared/errors/domain/ValidationError";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { UserId } from "../domain/valueObjects/UserId";
import { UserEmail } from "../domain/valueObjects/UserEmail";
import { UserName } from "../domain/valueObjects/UserName";

export class PrismaUserRepository implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: {
        email: user.email.value,
        name: user.name.value,
      },
    });
    return new User(
      new UserName(newUser.name),
      new UserEmail(newUser.email),
      new UserId(newUser.id),
    );
  }

  async getAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user: any) => new User(
      new UserName(user.name),
      new UserEmail(user.email),
      new UserId(user.id),
    ));
  }

  async getById(id: UserId): Promise<User | null> {
    if (!id) {
      throw new ValidationError('Id is required');
    }
    const user = await this.prisma.user.findUnique({
      where: {
        id: id.value,
      },
    });
    return user ? new User(
        new UserName(user.name),
        new UserEmail(user.email),
        new UserId(user.id),
      ) : null;
  }

  async edit(user: User): Promise<User> {
    if (!user.id) {
      throw new ValidationError('Id is required');
    }

    const updatedUser = await this.prisma.user.update({
      where: {
        id: user.id.value,
      },
      data: {
        email: user.email.value,
        name: user.name.value,
      },
    });
    return new User(
      new UserName(updatedUser.name),
      new UserEmail(updatedUser.email),
      new UserId(updatedUser.id),
    );
  }

  async delete(id: UserId): Promise<User> {
    const deletedUser = await this.prisma.user.delete({
      where: {
        id: id.value,
      },
    });
    return new User(
      new UserName(deletedUser.name),
      new UserEmail(deletedUser.email),
      new UserId(deletedUser.id),
    );
  }
}