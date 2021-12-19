import { getExistingProducts } from "../utils/cartFunctions.js";
import { saveProducts } from "../utils/cartFunctions.js";

export function handleClick() {
  const id = this.dataset.id;
  const name = this.dataset.name;
  const price = this.dataset.price;
  const image = this.dataset.image;

  const currentProducts = getExistingProducts();

  const productExist = currentProducts.find((prod) => prod.id === id);

  if (!productExist) {
    const product = { id: id, name: name, price: price, image: image };
    currentProducts.push(product);
    saveProducts(currentProducts);
    this.replaceChildren("Remove from cart");
    window.alert(this.dataset.name + " was added to the shopping cart.");
  } else {
    const newProducts = currentProducts.filter((prod) => prod.id !== id);
    saveProducts(newProducts);
    this.replaceChildren("Add to cart");
    window.alert(this.dataset.name + " was removed from the shopping cart.");
  }
}
