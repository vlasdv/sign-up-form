const inputFields = document.querySelectorAll('input');
const form = document.querySelector('form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

confirmPassword.pattern = '^$';

form.addEventListener('submit', (event) => {
  console.log('form');
  if (!confirmPassword.checkValidity()) {    
    event.preventDefault();      
  } 
});

password.addEventListener('blur', () => {
  confirmPassword.pattern = `^${password.value}$`;
});

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.checkValidity()) {
    password.setCustomValidity('');
    confirmPassword.setCustomValidity('');
    errorSpan.textContent = '';
  } else {
    confirmPassword.setCustomValidity("Passwords don't match");
  }
});

