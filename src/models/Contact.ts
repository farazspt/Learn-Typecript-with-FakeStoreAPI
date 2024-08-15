export default class Contact {
  readonly name: any;
  readonly phone: string;
  readonly email: string;
  readonly city: string;
  readonly street: string;
  readonly number: number;
  readonly zipcode: string;
  readonly lat: string;
  readonly long: string;

  constructor({
    name,
    phone,
    email,
    address: {
      city,
      street,
      number,
      zipcode,
      geolocation: { lat, long },
    },
  }: {
    name: any;
    phone: string;
    email: string;
    address: any;
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: any;
    lat: string;
    long: string;
  }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.city = city;
    this.street = street;
    this.number = number;
    this.zipcode = zipcode;
    this.lat = lat;
    this.long = long;
  }
}
