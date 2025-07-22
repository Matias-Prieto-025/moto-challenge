import { User } from '../domain/User';
import { UserRepository } from "../domain/UserRepository";
import { UserId } from '../domain/valueObjects/UserId';
import { UserNotFoundError } from '../domain/errors/UserNotFoundError';

export class UserGetById {
  constructor(private repository: UserRepository) {}

  async execute(id: string): Promise<User> {
    const userId = new UserId(id);
  
    const user = await this.repository.getById(userId);

    if (!user) throw new UserNotFoundError();

    return user;
  }
}