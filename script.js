function buyProduct(productName) {
  alert(`You selected to buy: ${productName}`);
}
let cart = [];

function buyProduct(productName, price) {
  cart.push({ name: productName, price: price });
  alert(`${productName} added to cart!`);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartSection = document.getElementById("cart");
  cartSection.innerHTML = "<h2>Your Cart</h2>";
  let total = 0;
  cart.forEach(item => {
    cartSection.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });
  cartSection.innerHTML += `<h3>Total: ₹${total}</h3>`;
}