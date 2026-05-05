export class User {
  private _id: string;
  private _name: string;

  constructor(id: string, name: string) {
    if (!id) throw new Error('User ID cannot be empty');
    if (!name) throw new Error('User name cannot be empty');
    this._id = id;
    this._name = name;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  rename(newName: string) {
    if (!newName) throw new Error('User name cannot be empty');
    this._name = newName;
  }
}