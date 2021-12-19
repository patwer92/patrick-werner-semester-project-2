import { baseUrl } from "./settings/api.js";
import createMenu from "./components/common/createMenu.js";
import { displayMessage } from "./components/common/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { checkLength, validateEmail, submitNewsletterForm } from "./components/form.js";

createMenu();

const newsletterForm = document.querySelector("#newsletterForm");
newsletterForm.addEventListener("submit", submitNewsletterForm);

const form = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const message = document.querySelector(".message-container");

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue.length === 0 || passwordValue === 0) {
    return displayMessage("warning", "There are currently no values.", ".message-container");
  }

  if (validateEmail(emailValue)) {
    email.style.border = "1px solid black";
    emailError.style.display = "none";
  } else {
    email.style.border = "1px solid red";
    emailError.style.display = "block";
  }

  if (checkLength(passwordValue, 0)) {
    password.style.border = "1px solid black";
    passwordError.style.display = "none";
  } else {
    password.style.border = "1px solid red";
    passwordError.style.display = "block";
  }

  doLogin(emailValue, passwordValue);
}

form.addEventListener("submit", submitForm);

async function doLogin(email, password) {
  const url = baseUrl + "auth/local";

  const data = JSON.stringify({ identifier: email, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      displayMessage("success", "Successfully logged in.", ".message-container");

      saveToken(json.jwt);
      saveUser(json.user);

      setTimeout(() => {
        location.href = "/";
      }, 1000);
    }

    if (json.error) {
      displayMessage("warning", "Invalid login credentials.", ".message-container");
    }

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
