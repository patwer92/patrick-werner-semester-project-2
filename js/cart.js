import createMenu from "./components/common/createMenu.js";
import { displayMessage } from "./components/common/displayMessage.js";
import { getExistingProducts } from "./utils/cartFunctions.js";
import { submitNewsletterForm } from "./components/form.js";
import { cartSummary } from "./utils/cartFunctions.js";

createMenu();

const newsletterForm = document.querySelector("#newsletterForm");
newsletterForm.addEventListener("submit", submitNewsletterForm);

const products = getExistingProducts();

const cartContainer = document.querySelector(".cart-container");

const cart = document.querySelector(".cart");

if (products.length === 0) {
  cartContainer.innerHTML = `<p class="text-center w-100">.</p>`;
  displayMessage(
    "warning",
    "There are no products selected in your shopping cart.",
    ".cart-container"
  );
} else {
  cartSummary();
}

products.forEach((product) => {
  cart.innerHTML += `
    <div class="cart-item">
        <img src="${product.image}" alt="${product.image.alternativeText}" />
        <div class="cart-body">
            <h3 class="cart-title">${product.name}</h3>
            <p class="cart-price">Price: <span>$${product.price}</span></p>
              <a href="details.html?id=${product.id}" class="view-btn btn">View Product</a>
        </div>
    </div>
    `;
});
