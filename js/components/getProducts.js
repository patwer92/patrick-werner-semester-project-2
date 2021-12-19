import { baseUrl } from "../settings/api.js";
import { displayMessage } from "./common/displayMessage.js";

const productsUrl = baseUrl + "products";

export async function getProducts() {
  try {
    const response = await fetch(productsUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".message-container");
  }
}
