let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
  const existing = cart.find(item => item.name === productName);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: productName, price: price, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " को Cart में जोड़ा गया!");
}

function loadCart() {
  const cartContainer = document.getElementById("cartItems");
  const totalDisplay = document.getElementById("totalPrice");
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Cart खाली है</p>";
    totalDisplay.textContent = "₹0";
    return;
  }

  cartContainer.innerHTML = "";
  cart.forEach(item => {
    total += item.price * item.qty;
    cartContainer.innerHTML += `
      <div style="margin-bottom:10px;">
        <strong>${item.name}</strong> - ₹${item.price} × ${item.qty}
      </div>`;
  });

  totalDisplay.textContent = "₹" + total;
}

function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  loadCart();
}
