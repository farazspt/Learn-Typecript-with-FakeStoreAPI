export default class UserRow {
  readonly id: number;
  readonly firstname: string;
  readonly lastname: string;
  readonly username: string;
  readonly email: string;

  constructor({
    id,
    firstname,
    lastname,
    username,
    email,
  }: {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
  }) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
  }
}
