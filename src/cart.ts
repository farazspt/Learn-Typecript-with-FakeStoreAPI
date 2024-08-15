import CartDetail from "./models/CartDetail";
import { formatToDollar, formattingDate } from "./helper";

import {
  getProductById,
  getUserCarts,
  getUserName,
} from "./services/RequestData";

(async function (): Promise<void> {
  let userId: string | null = localStorage.getItem("userId");
  let carts: CartDetail[] = await getUserCarts(userId!);
  renderUser(userId);
  renderCarts(carts);
})();

async function renderUser(userId: string | null): Promise<void> {
  let { name, username, email } = await getUserName(userId!);

  document.querySelector(
    ".user-list .name"
  )!.textContent = `${name.firstname} ${name.lastname}`;
  document.querySelector(".username > span:last-child")!.textContent = username;
  document.querySelector(".email > span:last-child")!.textContent = email;
}

async function renderCarts(carts: CartDetail[]): Promise<void> {
  let cartsMain: Element | null = document.querySelector(".cart-main");
  for (let { date, products } of carts) {
    let cartContainer: Element = document.createElement("div");
    cartContainer.setAttribute("class", "cart-container");
    renderDate(date, cartContainer);
    cartsMain!.appendChild(cartContainer);

    for (let product of products) {
      renderProduct(product, cartContainer);
    }
  }
}

function renderDate(date: string, cartContainer: Element) {
  date = formattingDate(date);
  cartContainer.innerHTML = `
   <h3>
      DATE: <span>${date}</span>
   </h3>`;
}

async function renderProduct(
  { productId, quantity }: { productId: string; quantity: number },
  cartContainer: Element
) {
  let { title, image, price } = await getProductById(productId);

  let total = quantity * price;
  price = formatToDollar(price);
  total = formatToDollar(total);

  let productDetail = document.createElement("div");
  productDetail.setAttribute("class", "product-detail");
  let productInfo = `
      <div class="left">
            <div class="image-container">
                  <img src="${image}">
            </div>
            <div class="product-info">
                  <div class="product-name">
                     <a class="product-link" data-id="${productId}" href="javascript:;">${title}</a>
                  </div>
                  <div class="quantity">Qty: <span>${quantity}</span></div>
                  <div class="unit-price">Unit Price: <span>$ ${price}</span></div>
            </div>
         </div>
         <div class="total-price">
            Total: <span>${total}</span>
         </div>
   `;

  productDetail.innerHTML += productInfo;
  cartContainer.appendChild(productDetail);
  addProductDetailButton();
}

function addProductDetailButton() {
  let productLink = document.querySelectorAll(".product-link");
  for (let button of productLink) {
    button.addEventListener("click", () => {
      let productId = button.getAttribute("data-id");
      localStorage.setItem("SelectedProductId", productId!);
      location.assign("product-detail.html");
    });
  }
}
