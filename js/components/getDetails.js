import { baseUrl } from "../settings/api.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const detailsUrl = baseUrl + "products";

export async function getDetails() {
  try {
    const response = await fetch(detailsUrl + "/" + id);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

getDetails();
