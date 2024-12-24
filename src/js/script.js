const form = document.querySelector('#form');
const formInputs = document.querySelectorAll('.input');
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const telephoneNumberRegEx =
  /^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;

form.addEventListener('submit', event => {
  event.preventDefault();

  formInputs.forEach(input => {
    removeError(input)

    if(!input.value) {
      createErrorMessage('Campo obrigatório', input)
      return
    } 

    if(input.id === 'email-input') {
      validateEmail(input)
    }
    
    if(input.type === 'number') {
      validateTelephoneNumber(input)
    }
   
  })
});

function validateEmail(input) {
  if (!emailRegEx.test(input.value)) {
    createErrorMessage('Insira um email válido', input);
    return;
  }

  removeError(input);
}

function validateTelephoneNumber(input) {
  if (!telephoneNumberRegEx.test(input.value)) {
    createErrorMessage('Insira um número de telefone válido', input);
    return;
  }

  removeError(input);
}

function createErrorMessage(message, targetInput) {
  const errorMessageElement = targetInput.nextElementSibling
  errorMessageElement.innerText = message;

  inputAndMessageContainer = errorMessageElement.parentElement;

  inputAndMessageContainer.classList.remove('valid');
  inputAndMessageContainer.classList.add('error');
}

function removeError(targetInput) {
  const errorMessageElement = targetInput.nextElementSibling
  errorMessageElement.innerText = '';

  const inputAndMessageContainer = errorMessageElement.parentElement;

  inputAndMessageContainer.classList.remove('error');
  inputAndMessageContainer.classList.add('valid');
}