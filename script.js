function validateForm(event) {
  event.preventDefault();

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = document.getElementById('email');
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Basic password strength validation (at least 8 characters)
  const passwordInput = document.getElementById('password');
  if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  // Submit the form if validation passes (you can send data to the server here)
  alert('Registration successful!');
  window.open("confirmation.html")
  document.getElementById('registrationForm').reset();
}
