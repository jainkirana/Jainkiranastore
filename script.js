
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
    totalEl.textContent = "Total: ₹" + total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const options = {
        "key": "rzp_test_EP4HftJ7SELH8Z",
        "amount": total * 100,
        "currency": "INR",
        "name": "Jain Kirana Store",
        "description": "Grocery Purchase",
        "handler": function (response) {
            window.location.href = "thankyou.html";
        },
        "prefill": {
            "name": "",
            "email": "",
            "contact": ""
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const rzp = new Razorpay(options);
    rzp.open();
}
