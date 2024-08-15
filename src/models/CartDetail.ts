export default class CartDetail {
  readonly id: number;
  readonly userId: number;
  readonly firstname: string;
  readonly lastname: string;
  readonly date: string;
  readonly products: any;

  constructor({
    id,
    userId,
    firstname,
    lastname,
    date,
    products,
  }: {
    id: number;
    userId: number;
    firstname: string;
    lastname: string;
    date: string;
    products: any;
  }) {
    this.id = id;
    this.userId = userId;
    this.firstname = firstname;
    this.lastname = lastname;
    this.date = date;
    this.products = products;
  }

  printFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
