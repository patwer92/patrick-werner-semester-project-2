export function getExistingProducts() {
  const prods = localStorage.getItem("products");

  if (prods === null) {
    return [];
  } else {
    return JSON.parse(prods);
  }
}

export function saveProducts(prods) {
  localStorage.setItem("products", JSON.stringify(prods));
}
