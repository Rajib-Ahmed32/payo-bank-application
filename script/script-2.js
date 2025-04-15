document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('addMoneyForm');
    const feedback = document.getElementById('feedback');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Get trimmed input values
      const bank = document.getElementById('bank').value.trim();
      const accountNumber = document.getElementById('accountNumber').value.trim();
      const amount = parseFloat(document.getElementById('amount').value.trim());
      const pin = document.getElementById('pin').value.trim();
  
      // Reset feedback
      feedback.textContent = '';
      feedback.className = '';
  
      // Input validation
      if (bank === 'Select bank' || !bank) {
        showError('Please select a valid bank.');
        return;
      }
  
      if (!/^\d{11}$/.test(accountNumber)) {
        showError('Account number must be exactly 11 digits.');
        return;
      }
  
      if (isNaN(amount) || amount <= 0) {
        showError('Please enter a valid amount greater than 0.');
        return;
      }
  
      if (!/^\d{4}$/.test(pin)) {
        showError('PIN must be exactly 4 digits.');
        return;
      }
  
      // Success message
      const successMessage = `৳${amount} has been successfully added to your ${bank} account (${accountNumber}).`;
      feedback.textContent = successMessage;
      feedback.className = 'text-green-600 mt-4 text-center font-semibold';
  
      // Show success alert
      alert(`Success!\n\n${successMessage}`);
  
      // Reset form
      form.reset();
    });
  
    function showError(message) {
      feedback.textContent = message;
      feedback.className = 'text-red-600 mt-4 text-center font-semibold';
    }
  });
  