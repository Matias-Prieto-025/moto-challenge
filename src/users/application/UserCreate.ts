import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';
import { UserEmail } from '../domain/valueObjects/UserEmail';
import { UserId } from '../domain/valueObjects/UserId';
import { UserName } from '../domain/valueObjects/UserName';

export class UserCreate {
  constructor(private repository: UserRepository) {}

  async execute (
    id: string,
    name: string,
    email: string
  ): Promise<User> {

    const user = new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new Date(),
    );

    return await this.repository.create(user);
  }
}