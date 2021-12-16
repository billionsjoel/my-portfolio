const formStorage = document.querySelector('.form-local-storage-class');

const { userName } = formStorage.elements;
const { userEmail } = formStorage.elements;
const userMessage = formStorage.elements.message;

/* ======= save the date in the js object ====== */

formStorage.addEventListener('change', () => {
	const formObj = {};

	if (userName.value.trim() !== '') {
		formObj.nameValue = userName.value.trim();
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

const localData = localStorage.getItem('formObj');
const { nameValue, email, message } = localData ? JSON.parse(localData) : {};

userEmail.value = email || '';
userName.value = nameValue || '';
userMessage.value = message || '';
