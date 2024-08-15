import ProductCard from "./models/ProductCard";

import { getProductById } from "./services/RequestData";

(function () {
  let productId: string = localStorage.getItem("SelectedProductId")!;
  renderProduct(productId);
})();

async function renderProduct(productId: string): Promise<void> {
  let product: ProductCard = await getProductById(productId);
  let stars: number = Math.round(product.rate);

  let htmlRow: string = `
  <div class="image-container">
     <img src="${product.image}">
  </div>
  <div class="detail-wrapper">
     <div>
           <a class="back-link" href="product-index.html">Back to Product List</a>
     </div>
     <div class="detail">
        <h1>${product.title}
        </h1>
        <div class="price>$ ${product.price}</div>
        <div class="rate">
           <div class="stars">
`;
  for (let i = 0; i < stars; i++) {
    htmlRow += '<i class="fas fa-star filled"></i>';
  }

  for (let i = stars; i < 5; i++) {
    htmlRow += '<i class="fas fa-star"></i>';
  }

  htmlRow += `
              </div>
              <span>(${product.rate})</span>
           </div>
           <div class="count">
              <span>TOTAL SOLD</span>
              <span>${product.count} Unit(s)</span>
           </div>
           <div class="category">
              <span>CATEGORY</span>
              <span>${product.category}</span>
           </div>
           <div class="description">
              <h3>DESCRIPTION</h3>
              <p>
                 ${product.description}
              </p>
           </div>
     </div>
  </div>
  `;

  let mainDetail = document.querySelector(".product-detail-main");
  mainDetail!.innerHTML = htmlRow;
}
