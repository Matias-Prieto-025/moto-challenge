import { UserEmail } from "./valueObjects/UserEmail";
import { UserId } from "./valueObjects/UserId";
import { UserName } from "./valueObjects/UserName";


export class User {
  id: UserId | null;
  name: UserName;
  email: UserEmail;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    name: UserName,
    email: UserEmail,
    id?: UserId | null,
    createdAt?: Date,
  ) {
    this.id = id || null;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt || null;
    this.updatedAt = null;
  }

  public setName(name: UserName) {
    this.name = name;
  }

  public setEmail(email: UserEmail) {
    this.email = email;
  }

  public setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }

  public mapToPrimitives() {
    return {
      id: this.id?.value,
      name: this.name.value,
      email: this.email.value,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}