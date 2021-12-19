import { getProducts } from "./components/getProducts.js";
import { createProductList } from "./components/createProduct.js";
import { submitNewsletterForm } from "./components/form.js";
import createMenu from "./components/common/createMenu.js";

const newsletterForm = document.querySelector("#newsletterForm");
newsletterForm.addEventListener("submit", submitNewsletterForm);

createMenu();

let products = [];

async function setup() {
  products = await getProducts();
  createProductList(products);

  console.log(products);
}

setup();
