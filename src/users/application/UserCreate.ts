import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';
import { UserEmail } from '../domain/valueObjects/UserEmail';
import { UserName } from '../domain/valueObjects/UserName';

export class UserCreate {
  constructor(private repository: UserRepository) {}

  async execute (
    name: string,
    email: string
  ): Promise<User> {

    const user = new User(
      new UserName(name),
      new UserEmail(email),
    );

    const createdUser = await this.repository.create(user);

    return createdUser;
  }
}