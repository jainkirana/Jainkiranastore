
function checkout() {
    var options = {
        "key": "rzp_test_EP4HftJ7SELH8Z",
        "amount": "50000",
        "currency": "INR",
        "name": "Jain Kirana Store",
        "description": "Test Transaction",
        "image": "",
        "handler": function (response){
            alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
            window.location.href = "thankyou.html";
        },
        "prefill": {
            "name": "Customer Name",
            "email": "customer@example.com",
            "contact": "9999999999"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
}
