const userName = form.elements['userName'];
const userEmail = form.elements['userEmail'];
const userMessage = form.elements['message'];

/* ======= save the date in the js object ====== */

form.addEventListener('change', () => {
  let formObj = {};

  if (userName.value.trim() !== '') {
    formObj.name = userName.value.trim();
  }

  if (userEmail.value.trim() !== '') {
    formObj.email = userEmail.value.trim();
  }

  if (userMessage.value.trim() !== '') {
    formObj.message = userMessage.value.trim();
  }

  localStorage.setItem('formData', JSON.stringify(formObj));
});

/* ======= loading the form data from the localStorage ====== */

const localData = localStorage.getItem('formData');
const { name, email, message } = localData ? JSON.parse(localData) : {};

userEmail.value = email ? email : '';
userName.value = name ? name : '';
userMessage.value = message ? message : '';
