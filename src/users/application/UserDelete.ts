import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { UserId } from "../domain/valueObjects/UserId";

export class UserDelete {
  constructor(private repository: UserRepository) { }

  async execute(id: string): Promise<User> {
    const userId = new UserId(id);

    const userDeleted = await this.repository.delete(userId);
    return userDeleted;
  }
}