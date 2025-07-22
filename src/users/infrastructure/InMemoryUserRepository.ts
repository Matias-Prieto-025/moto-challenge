import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { UserId } from "../domain/valueObjects/UserId";

export class InMemoryUserRepository implements UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
  async getAll(): Promise<User[]> {
    return this.users;
  }

  async getById(id: UserId): Promise<User | null> {
    return this.users.find((user) => user.id.value === id.value) || null;
  }

  async edit(user: User): Promise<User> {
    const index = this.users.findIndex((u) => u.id.value === u.id.value);
    this.users[index] = user;

    return this.users[index];
  }

  async delete(id: UserId): Promise<User> {
    const index = this.users.findIndex((user) => user.id.value === id.value);
    const deletedUser = this.users[index];
    this.users.filter((user) => user.id.value !== id.value);

    return deletedUser;
  }
}