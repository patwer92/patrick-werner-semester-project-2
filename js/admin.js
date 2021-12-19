import { submitNewsletterForm } from "./components/form.js";
import createMenu from "./components/common/createMenu.js";

createMenu();

const newsletterForm = document.querySelector("#newsletterForm");
newsletterForm.addEventListener("submit", submitNewsletterForm);
