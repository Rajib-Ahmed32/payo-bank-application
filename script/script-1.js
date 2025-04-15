document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll('input');
    const accountNumber = inputs[0].value.trim();
    const pin = inputs[1].value.trim();

    // Basic validation
    if (!accountNumber || !pin) {
      alert("Please fill in both fields.");
      return;
    }

    if (!/^\d{10}$/.test(accountNumber)) {
      alert("Account Number must be exactly 10 digits.");
      return;
    }

    if (!/^\d{4}$/.test(pin)) {
      alert("PIN must be exactly 4 digits.");
      return;
    }

    // Dummy credentials check
    const demoAccount = "1234567890";
    const demoPin = "1234";

    if (accountNumber !== demoAccount || pin !== demoPin) {
      alert("Invalid Account Number or PIN.");
      return;
    }

    // Success: reset form and redirect
    form.reset();
    window.location.href = "main.html";
  });
});



