import ProductCard from "./models/ProductCard";

import { getProducts } from "./services/RequestData";

(async function (): Promise<void> {
  await populateProducts();
})();

async function populateProducts(): Promise<void> {
  let products: ProductCard[] = await getProducts();
  let htmlRows: string = "";
  for (let product of products) {
    let stars = Math.round(product.rate);
    let htmlRow: string = `
      <div class="product-item">
         <div class="screen">
               <img src="${product.image}">
         </div>
         <div class="info">
               <div class="name">${product.title}</div>
               <div class="rate-and-count">
                  <div class="rate">`;

    // Tambahkan bintang kuning sesuai rating
    for (let i = 0; i < stars; i++) {
      htmlRow += '<i class="fas fa-star filled"></i>';
    }

    // Tambahkan bintang kosong untuk melengkapi sampai 5 bintang
    for (let i = stars; i < 5; i++) {
      htmlRow += '<i class="fas fa-star"></i>';
    }
    htmlRow += `                  </div>
                  <span class="count">(${product.count})</span>
               </div>
               <div class="price">
                  $ ${product.price}
               </div>
         </div>
         <div class="link-container">
               <a data-id="${product.id}" class="detail-button" href="javascript:;">View Detail</a>
         </div>
      </div>
    `;

    htmlRows += htmlRow;
  }

  let productMain = document.querySelector(".products-main");
  productMain!.innerHTML = htmlRows;
  addDetailButtonListener();
}

function addDetailButtonListener(): void {
  let detailButtons: NodeListOf<Element> =
    document.querySelectorAll(".detail-button");
  for (let button of detailButtons) {
    button.addEventListener("click", () => {
      let productId = button.getAttribute("data-id");
      localStorage.setItem("SelectedProductId", productId!);
      location.assign("product-detail.html");
    });
  }
}
