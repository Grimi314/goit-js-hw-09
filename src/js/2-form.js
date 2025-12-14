'use strict';

const feedBackForm = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  feedBackForm.elements.email.value = parsedData.email;
  feedBackForm.elements.message.value = parsedData.message;
}

feedBackForm.addEventListener('input', handlInput);

function handlInput(event) {
  const form = event.currentTarget;

  const formEmail = form.elements.email.value.trim();
  const formMessage = form.elements.message.value.trim();

  formData.email = formEmail;
  formData.message = formMessage;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  console.log(formData);
}

feedBackForm.addEventListener('submit', handlSubmit);

function handlSubmit(event) {
  if (
    feedBackForm.elements.email.value === '' ||
    feedBackForm.elements.message.value === ''
  ) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';

  feedBackForm.reset();
}
