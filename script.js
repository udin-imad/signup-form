const password = document.querySelector('#pwd');
const passwordConfirm = document.querySelector('#confirm_pwd');
const errorMessage = document.getElementById('password-mismatch-message');
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  if (password.value !== passwordConfirm.value) {
      errorMessage.style.display = 'block';
      document.getElementById('confirm_pwd').setCustomValidity('Passwords do not match'); // Set custom validity
      event.preventDefault(); // Prevent form submission
  }
});

password.addEventListener('input', function() {
  const errorMessage = document.getElementById('password-mismatch-message');
  errorMessage.style.display = 'none';
  document.getElementById('confirm_pwd').setCustomValidity(''); // Reset custom validity
});

passwordConfirm.addEventListener('input', function() {
  const errorMessage = document.getElementById('password-mismatch-message');
  errorMessage.style.display = 'none';
  document.getElementById('confirm_pwd').setCustomValidity(''); // Reset custom validity
});