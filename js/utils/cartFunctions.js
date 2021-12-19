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

export function cartSummary() {
  let sum = 0;
  let cartTotal = "";
  let products = JSON.parse(localStorage.getItem("products"));
  const sumContainer = document.querySelector(".summary-body");

  for (var i = 0; i < products.length; i++) {
    sum += parseFloat(products[i].price);
  }
  cartTotal = `<h3>Cart Summary</h3>
              <p>Total amount: <span>$${sum}</span></p>
              <a href="#" class="checkout-btn btn">Checkout</a>`;
  sumContainer.innerHTML = cartTotal;
}
