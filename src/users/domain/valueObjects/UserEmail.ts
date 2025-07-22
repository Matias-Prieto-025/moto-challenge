export class UserEmail {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.validate();
  }

  private validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.value)) {
      throw new Error('UserEmail must be a valid email address');
    }
  }
}