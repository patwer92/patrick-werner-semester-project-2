import { getUsername } from "../../utils/storage.js";

import { logout } from "../../utils/storage.js";

export default function createMenu() {
  const { pathname } = document.location;

  const navBar = document.querySelector(".navbar");

  const username = getUsername();

  console.log(username);

  let authLinkDesktop = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" 
                  href="login.html">Login<i class="fas fa-user login-icon"></i></a>`;

  let authLinkMobile = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" 
                  href="login.html">Login</a>`;

  if (username) {
    authLinkDesktop = `<a class="nav-link ${pathname === "/add.html" ? "active" : ""}" 
                      href="add.html">Add Product</a>
                      <span class="nav-link user-btn ml-5" href="/">Logout<i class="fas fa-user login-icon"></i></span>`;
    authLinkMobile = `<a class="nav-link ${pathname === "/add.html" ? "active" : ""}" 
                      href="add.html">Add Product</a>
                      <span class="nav-link user-btn" href="/">Logout</span>`;
  }

  navBar.innerHTML = ` 
  <div class="container">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav">
        <ul class="nav-desktop">
          <li class="nav-item">
            <a class="nav-link ${pathname === "/" ? "active" : ""}" href="/"
              >Home<i class="fas fa-home home-icon"></i>
              <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item ml-5">
            <a class="nav-link ${pathname === "/shop.html" ? "active" : ""}" href="shop.html"
              >Shop<i class="fas fa-mitten shop-icon"></i
            ></a>
          </li>
        </ul>
        <ul class="nav-desktop">
          <li class="nav-item mr-5">
            ${authLinkDesktop}
          </li>
          <li class="nav-item">
            <a class="nav-link ${pathname === "/cart.html" ? "active" : ""}" href="cart.html"
              >Cart<i class="fas fa-shopping-cart cart-icon"></i
            ></a>
          </li>
        </ul>
        <ul class="nav-mobile">
          <li class="nav-item">
            <a class="nav-link ${pathname === "/" ? "active" : ""}" href="/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link ${
              pathname === "/shop.html" ? "active" : ""
            }" href="shop.html">Shop</a>
          </li>
          <li class="nav-item">
            ${authLinkMobile}
          </li>
          <li class="nav-item">
            <a class="nav-link ${
              pathname === "/cart.html" ? "active" : ""
            }" href="cart.html">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  </div>`;
  if (username) {
    const logoutLink = document.querySelector(".user-btn");
    logoutLink.addEventListener("click", logout);
  }
}
