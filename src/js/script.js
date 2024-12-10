const form = document.querySelector('#form');
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const telephoneNumberRegEx =
  /^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;

form.addEventListener('submit', event => {
  event.preventDefault();

  validateName();
  validateEmail();
  validateTelephoneNumber();
  validateMessage();
});

function validateName() {
  const nameInput = form.querySelector('#name-input');

  if (nameInput.value === '') {
    createErrorMessage('Campo obrigatório', 'name');
    return;
  }

  if (!isNaN(nameInput.value)) {
    createErrorMessage('Você deve preencher seu nome', 'name');
    return;
  }

  removeError('name');
}

function validateEmail() {
  const emailInput = form.querySelector('#email-input');

  if (emailInput.value === '') {
    createErrorMessage('Campo obrigatório', 'email');
    return;
  }

  if (!emailRegEx.test(emailInput.value)) {
    createErrorMessage('Insira um email válido', 'email');
    return;
  }

  removeError('email');
}

function validateTelephoneNumber() {
  const telephoneInput = form.querySelector('#telephone-input');

  if (telephoneInput.value === '') {
    createErrorMessage('Campo obrigatório', 'telephone');
    return;
  }

  if (!telephoneNumberRegEx.test(telephoneInput.value)) {
    createErrorMessage('Insira um número de telefone válido', 'telephone');
    return;
  }

  removeError('telephone');
}

function validateMessage() {
  const messageInput = form.querySelector('#message-input');

  if (messageInput.value === '') {
    createErrorMessage('Campo obrigatório', 'message');
    return;
  }

  removeError('message');
}

function createErrorMessage(message, targetInput) {
  const errorMessageElement = form.querySelector(
    `#${targetInput}-input + .error-message`
  );
  errorMessageElement.innerText = message;

  inputAndMessageContainer = errorMessageElement.parentElement;

  inputAndMessageContainer.classList.remove('valid');
  inputAndMessageContainer.classList.add('error');
}

function removeError(targetInput) {
  const errorMessageElement = form.querySelector(
    `#${targetInput}-input + .error-message`
  );
  errorMessageElement.innerText = '';

  const inputAndMessageContainer = errorMessageElement.parentElement;

  inputAndMessageContainer.classList.remove('error');
  inputAndMessageContainer.classList.add('valid');
}
