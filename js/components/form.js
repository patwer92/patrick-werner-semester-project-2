const newsletterEmail = document.querySelector("#newsletterEmail");
const newsletterEmailError = document.querySelector("#newsletterEmailError");

export function submitNewsletterForm(event) {
  event.preventDefault();

  const emailValue = newsletterEmail.value.trim();

  if (validateEmail(emailValue)) {
    newsletterEmailError.style.display = "none";
  } else {
    newsletterEmail.style.border = "2px solid red";
    newsletterEmailError.style.display = "block";
  }

  if (validateEmail(emailValue)) {
    newsletterEmail.style.border = "none";
    alert("Thank you for subscribing to our newsletter!");
  }
}

export function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
