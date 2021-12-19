const container = document.querySelector(".products-container");

export function createProduct(product) {
  return `<div class="col mb-4">
                <div class="products-container">
                    <div class="card m-auto">
                    <img src="${product.image.url}" class="card-img-top" alt="${product.image.alternativeText}" />
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-price">
                            $${product.price}
                        </p>
                        <a href="details.html?id=${product.id}" class="btn">Shop now</a>
                    </div>
                    </div>
                </div>
            </div>
    `;
}

export function createFeaturedList(productList) {
  let html = "";
  productList.forEach((productList) => {
    let product = productList;
    if (product.featured === true) {
      html += createProduct(product);
    }
  });
  container.innerHTML = html;
}

export function createProductList(productList) {
  let html = "";
  productList.forEach((productList) => {
    let product = productList;
    html += createProduct(product);
  });
  container.innerHTML = html;
}
