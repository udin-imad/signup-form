const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const password = document.querySelector('#pwd');
const passwordConfirm = document.querySelector('#confirm_pwd');
const errorMessage = document.getElementById('password-mismatch-message');
const form = document.querySelector('form');
const phone = document.querySelector('#phone');

form.addEventListener('submit', function(event) {
  if (password.value !== passwordConfirm.value) {
      errorMessage.style.display = 'block';
      passwordConfirm.setCustomValidity('Passwords do not match'); // Set custom validity
      event.preventDefault(); // Prevent form submission
  }
});

password.addEventListener('input', function() {
  errorMessage.style.display = 'none';
  passwordConfirm.setCustomValidity(''); // Reset custom validity
});

passwordConfirm.addEventListener('input', function() {
  errorMessage.style.display = 'none';
  passwordConfirm.setCustomValidity(''); // Reset custom validity
});

password.addEventListener('invalid', function(){
  this.setCustomValidity('Please enter a valid password with at least 8 characters, including one uppercase letter, one lowercase letter, and one number.')
})

passwordConfirm.addEventListener('invalid', function(){
  this.setCustomValidity('Please confirm your password.')
})

firstName.addEventListener('invalid', function() {
  this.setCustomValidity('Please enter your first name')
})

firstName.addEventListener('input', function() {
  this.setCustomValidity('')
})

lastName.addEventListener('invalid', function() {
  this.setCustomValidity('Please enter your last name')
})

lastName.addEventListener('input', function() {
  this.setCustomValidity('')
})

email.addEventListener('invalid', function() {
  this.setCustomValidity('Please enter valid email, example:email@domain.com')
})

email.addEventListener('input', function() {
  this.setCustomValidity('')
})

phone.addEventListener('invalid', function() {
  this.setCustomValidity('Please enter a valid phone number')
})

phone.addEventListener('input', function() {
  this.setCustomValidity('')
})