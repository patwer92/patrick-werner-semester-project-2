import { getExistingProducts } from "../utils/cartFunctions.js";
// import { getUsername } from "../utils/storage.js";

const detailsContainer = document.querySelector(".details-section");

const products = getExistingProducts();

// const username = getUsername();

export function createDetails(product) {
  let btnText = "Add to cart";

  const doesObjectExist = products.find((prod) => prod.id === product.id);

  if (doesObjectExist) {
    btnText = "Remove from cart";
  }

  return `<nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="shop.html">Shop</a></li>
                <li class="breadcrumb-item active" aria-current="page">${product.name}</li>
            </ol>
        </nav>
        <div class="details-container">
            <img class="img-fluid" src="${product.image.url}" alt="${product.image.alternativeText}" />
            <div class="details-body">
                <h3 class="details-title">${product.name}</h3>

                <p class="details-text">${product.description}</p>
                <hr />
                <div>
                    <p class="price-text">$${product.price}</p>
                    <button class="cart-btn btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image.url}">
                        ${btnText}
                    </button>
                </div>
            </div>
        </div>
        <div class="btn-container">
            <a href="shop.html" class="to-shop-btn btn">
                <i class="fas fa-long-arrow-alt-left arrow-left"></i>Back to shop
            </a>
            <a href="cart.html" class="to-cart-btn btn">
                Go to cart<i class="fas fa-shopping-cart to-cart-icon"></i>
            </a>
        </div>

    `;
}

export function createDetailsList(detailsList) {
  let html = "";

  let details = detailsList;
  html += createDetails(details);

  detailsContainer.innerHTML = html;
}
