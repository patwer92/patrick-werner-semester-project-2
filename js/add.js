import { displayMessage } from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/api.js";
import { submitNewsletterForm } from "./components/form.js";
import createMenu from "./components/common/createMenu.js";

createMenu();

const newsletterForm = document.querySelector("#newsletterForm");
newsletterForm.addEventListener("submit", submitNewsletterForm);

const form = document.querySelector("form");
const title = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const featured = document.querySelector("#featured");
const message = document.querySelector(".message-container");

$(document).ready(function () {
  $(featured).change(function () {
    if ($(this).is(":checked")) {
      featured.value = true;
    } else {
      featured.value = false;
    }
  });
});

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const featuredValue = featured.value;

  const request = new XMLHttpRequest();

  const formData = new FormData();

  const formElements = form.elements;

  const data = {};

  for (let i = 0; i < formElements.length; i++) {
    const currentElement = formElements[i];
    if (!["submit", "file"].includes(currentElement.type)) {
      data[currentElement.name] = currentElement.value;
    } else if (currentElement.type === "file") {
      for (let i = 0; i < currentElement.files.length; i++) {
        const file = currentElement.files[i];
        formData.append(`files.${currentElement.name}`, file, file.name);
      }
    }
  }

  request.open("POST", `${baseUrl}products`);

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        // displayMessage("warning", request.status, ".message-container");
        console.log(request.status);
      } else {
        displayMessage(
          "error",
          "There was an error when adding product to server",
          ".message-container"
        );
      }
    }
  };

  formData.append("data", JSON.stringify(data));

  request.send(formData, titleValue, priceValue, descriptionValue, featuredValue);

  if (isNaN(priceValue)) {
    return displayMessage("warning", "Invalid values", ".message-container");
  }

  displayMessage("success", "Product was successfully created.", ".message-container");
  form.reset();
}
