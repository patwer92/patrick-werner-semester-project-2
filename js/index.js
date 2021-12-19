import { getBanner } from "./components/getBanner.js";
import { getProducts } from "./components/getProducts.js";
import { createFeaturedList } from "./components/createProduct.js";
import { submitNewsletterForm } from "./components/form.js";
import createMenu from "./components/common/createMenu.js";

createMenu();

const newsletterForm = document.querySelector("#newsletterForm");
newsletterForm.addEventListener("submit", submitNewsletterForm);

let banner = [];
let featuredProducts = [];

async function setup() {
  banner = await getBanner();
  featuredProducts = await getProducts();
  createFeaturedList(featuredProducts);
}

setup();
