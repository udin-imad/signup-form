const password = document.querySelector('#pwd');
const passwordConfirm = document.querySelector('#confirm_pwd');
const error = document.querySelector('.error');

function confirmPassword() {
    const textError = password.value === passwordConfirm.value ? '':'* password do not match'
    error.textContent = textError
}

passwordConfirm.addEventListener('change', confirmPassword);