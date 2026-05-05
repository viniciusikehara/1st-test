export class UserEmail {
  private readonly email: string;

  constructor(email: string) {
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email address');
    }
    this.email = email;
  }

  get value(): string {
    return this.email;
  }

  equals(other: UserEmail): boolean {
    return this.email === other.email;
  }
}