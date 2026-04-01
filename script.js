const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 🔴 STEP 4 — REAL PAYMENT (PAYSTACK)

function payWithPaystack() {
  let total = document.getElementById("total").innerText;

  let handler = PaystackPop.setup({
    key: "YOUR_PUBLIC_KEY_HERE", // 🔥 PUT YOUR PAYSTACK KEY
    email: "customer@email.com",
    amount: total * 100,
    currency: "NGN",

    callback: function(response) {
      alert("Payment Successful ✅ Ref: " + response.reference);
      localStorage.removeItem("cart");
      window.location.href = "index.html";
    },

    onClose: function() {
      alert("Payment Cancelled");
    }
  });

  handler.openIframe();
}
