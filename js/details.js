import { getDetails } from "./components/getDetails.js";
import { createDetailsList } from "./components/createDetails.js";
import { handleClick } from "./components/toggleProducts.js";
import { submitNewsletterForm } from "./components/form.js";
import createMenu from "./components/common/createMenu.js";

createMenu();

const newsletterForm = document.querySelector("#newsletterForm");
newsletterForm.addEventListener("submit", submitNewsletterForm);

let details = [];

async function setup() {
  details = await getDetails();
  createDetailsList(details);
  const cartBtn = document.querySelector(".cart-btn");
  cartBtn.addEventListener("click", handleClick);
}

setup();
