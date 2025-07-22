import { User } from "./User";
import { UserId } from "./valueObjects/UserId";

export interface UserRepository {
  create(user: User): Promise<User>;
  getAll(): Promise<User[]>;
  getById(id: UserId): Promise<User | null>;
  edit(user: User): Promise<User>;
  delete(id: UserId): Promise<User>;
}