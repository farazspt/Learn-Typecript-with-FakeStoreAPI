export default class ProductCard {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly category: string;
  readonly image: string;
  readonly rate: number;
  readonly count: number;

  constructor({
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  }: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: any;
    rate: number;
    count: number;
  }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rate = rate;
    this.count = count;
  }
}
