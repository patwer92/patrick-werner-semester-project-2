import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/common/displayMessage.js";
import { deleteButton } from "./components/deleteProduct.js";
import { submitNewsletterForm } from "./components/form.js";
import createMenu from "./components/common/createMenu.js";

createMenu();

const newsletterForm = document.querySelector("#newsletterForm");
newsletterForm.addEventListener("submit", submitNewsletterForm);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
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

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    console.log(details);

    title.value = details.name;
    price.value = details.price;
    description.value = details.description;
    idInput.value = details.id;

    deleteButton(details.id);

    featured.value = details.featured;
  } catch (error) {
    displayMessage("error", "There was an error retrieving data from server", ".message-container");
  }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const featuredValue = featured.value;
  const idValue = idInput.value;

  const request = new XMLHttpRequest();

  const formData = new FormData();

  const formElements = form.elements;

  const data = {};

  const url = baseUrl + "products/" + id;

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
  1;
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        // displayMessage("warning", request.status, ".message-container");
        console.log(request.status);
      } else {
        displayMessage(
          "error",
          "There was an error updating product to the server.",
          ".message-container"
        );
      }
    }
  };

  request.open("PUT", `${url}`);

  console.log(request.open);

  formData.append("data", JSON.stringify(data));

  request.send(formData, titleValue, priceValue, descriptionValue, featuredValue, idValue);

  if (isNaN(priceValue)) {
    return displayMessage("warning", "Please insert proper values.", ".message-container");
  }

  return displayMessage("success", "Product was successfully updated.", ".message-container");
}
