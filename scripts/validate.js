/* ========= Get form values from UI ========== */
const form = document.querySelector('.form');
const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const MESSAGE_REQUIRED = 'Please enter your message';
const EMAIL_INVALID = 'Please enter a correct email address format';

/* ========= Validate input ==================== */
const showMessage = (input, message, type) => {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'Error';

  return type;
};

const showError = (input, message) => showMessage(input, message, false);
const showSuccess = (input) => showMessage(input, ' ', true);

const hasValue = (input, message) => {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
};

const validateEmail = (input, requiredMsg, invalidMsg) => {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }

  return true;
};

//= ======== Add form event listener ============
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameIsValid = hasValue(form.elements.userName, NAME_REQUIRED);
  const messageIsValid = hasValue(form.elements.message, MESSAGE_REQUIRED);
  const emailIsValid = validateEmail(
    form.elements.userEmail,
    EMAIL_REQUIRED,
    EMAIL_INVALID,
  );
  if (nameIsValid && messageIsValid && emailIsValid) {
    form.submit();
  }
});
