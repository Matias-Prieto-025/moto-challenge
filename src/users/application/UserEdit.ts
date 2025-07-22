import { UserNotFoundError } from '../domain/errors/UserNotFoundError';
import { User } from '../domain/User';
import { UserRepository } from "../domain/UserRepository";
import { UserEmail } from '../domain/valueObjects/UserEmail';
import { UserId } from '../domain/valueObjects/UserId';
import { UserName } from '../domain/valueObjects/UserName';

export class UserEdit {
  constructor(private repository: UserRepository) { }

  async execute(
    id: string,
    name?: string,
    email?: string,
  ): Promise<User> {

    const userId = new UserId(id);
    const user = await this.repository.getById(userId);

    if (!user) throw new UserNotFoundError();

    name && user.setName(new UserName(name));
    email && user.setEmail(new UserEmail(email));

    await this.repository.edit(user);

    return user;
  }
}