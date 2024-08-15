import UserRow from "../models/UserRow";
import Contact from "../models/Contact";
import ProductCard from "../models/ProductCard";

export async function getAllUsers(): Promise<UserRow[]> {
  const response = await fetch("https://fakestoreapi.com/users");
  const users: any = await response.json();
  let userRows: UserRow[] = [];

  for (let user of users) {
    userRows.push(
      new UserRow({
        id: user.id,
        firstname: user.name.firstname,
        lastname: user.name.lastname,
        username: user.username,
        email: user.email,
      })
    );
  }
  return userRows;
}

export async function getUserContact(userId: string): Promise<Contact> {
  const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
  const user: any = await response.json();
  const contact: Contact = new Contact(user);
  console.log(user);
  return contact;
}

export async function getUserName(userId: string): Promise<any> {
  const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
  const user: any = await response.json();
  return user;
}

export async function getProducts(): Promise<ProductCard[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: any = await response.json();
  const productCards: ProductCard[] = [];
  for (let product of products) {
    productCards.push(new ProductCard(product));
  }
  return productCards;
}

export async function getProductById(productId: string): Promise<ProductCard> {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const product: any = await response.json();
  const productCard: ProductCard = new ProductCard(product);
  return productCard;
}

export async function getUserCarts(userId: string): Promise<any> {
  const response = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
  const carts: any = await response.json();
  return carts;
}
