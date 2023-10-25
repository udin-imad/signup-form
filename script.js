const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const password = document.querySelector('#pwd');
const passwordConfirm = document.querySelector('#confirm_pwd');
const errorMessage = document.getElementById('password-mismatch-message');
const form = document.querySelector('form');
const phone = document.querySelector('#phone');
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

form.addEventListener('submit', function (event) {
  if (password.value !== passwordConfirm.value) {
    errorMessage.style.display = 'block';
    passwordConfirm.setCustomValidity('Passwords do not match'); // Set custom validity
    event.preventDefault(); // Prevent form submission
  }
});

password.addEventListener('input', function () {
  errorMessage.style.display = 'none';
  passwordConfirm.setCustomValidity(''); // Reset custom validity
});

passwordConfirm.addEventListener('input', function () {
  errorMessage.style.display = 'none';
  passwordConfirm.setCustomValidity(''); // Reset custom validity
});