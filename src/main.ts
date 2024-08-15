import UserRow from "./models/UserRow";
import Contact from "./models/Contact";

import { getAllUsers, getUserContact } from "./services/RequestData";

(async function (): Promise<void> {
  await populateUserData();
  addListActionListener();
  addCloseButtonListener();
})();

async function populateUserData(): Promise<void> {
  let users: UserRow[] = await getAllUsers();
  let htmlRows = "";
  for (let user of users) {
    let htmlRow: string = `
   <div class="user-list">
      <div class="left">
            <div class="name">${user.firstname} ${user.lastname}</div>
            <div class="username">
               <span>username: </span>
               <span>${user.username}</span>
            </div>
            <div class="email">
               <span>email: </span>
               <span>${user.email}</span>
            </div>
      </div>
      <div class="right">
            <a data-id="${user.id}" class="contact-button" href="javascript:;">Contact</a>
            <a data-id="${user.id}" class="cart-button" href="javascript:;">Cart</a>
      </div>
   </div>
   `;

    htmlRows += htmlRow;
  }

  let usersMain: Element | null = document.querySelector(".users-main");
  usersMain!.innerHTML = htmlRows;
}

function addListActionListener(): void {
  addContactButtonListener();
  addCartButtonListener();
}

function addContactButtonListener(): void {
  let contactButtons: NodeListOf<Element> =
    document.querySelectorAll(".contact-button");
  for (let button of contactButtons) {
    button.addEventListener("click", async function () {
      let userId: string | null = button.getAttribute("data-id");
      let address: Contact = await getUserContact(userId!);
      openContactModal(address);
    });
  }
}

function openContactModal(contact: Contact): void {
  let modal: Element | null = document.querySelector(".modal");
  document.querySelector(".contact-name")!.textContent =
    contact.name.firstname + " " + contact.name.lastname;
  document.querySelector("#contact-phone")!.textContent = contact.phone;
  document.querySelector("#contact-email")!.textContent = contact.email;
  document.querySelector("#contact-city")!.textContent = contact.city;
  document.querySelector("#contact-street")!.textContent =
    contact.street + " " + contact.number;
  document.querySelector("#contact-zipcode")!.textContent = contact.zipcode;
  document.querySelector("#contact-geolocation")!.textContent =
    contact.lat + "," + contact.long;
  modal!.classList.add("modal-open");

  console.log(contact);
}

function addCloseButtonListener(): void {
  let closeButton: Element | null = document.querySelector(
    ".modal .close-button"
  );
  closeButton!.addEventListener("click", function () {
    let modal: Element | null = document.querySelector(".modal");
    modal!.classList.remove("modal-open");
  });
}

function addCartButtonListener(): void {
  let cartButtons: NodeListOf<Element> =
    document.querySelectorAll(".cart-button");
  for (let button of cartButtons) {
    button.addEventListener("click", function () {
      let userId: string | null = button.getAttribute("data-id");
      localStorage.setItem("userId", userId!);
      location.assign("cart-detail.html");
    });
  }
}
