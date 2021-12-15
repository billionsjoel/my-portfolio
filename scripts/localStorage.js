const userName = form.elements['userName'];
const userEmail = form.elements['userEmail'];
const userMessage = form.elements['message'];

/* ======= save the date in the js object ====== */

form.addEventListener('change', () => {
	let formObj = {
		userName: userName.value,
		userEmail: userEmail.value,
		userMessage: userMessage.value,
	};
	localStorage.setItem('formData', JSON.stringify(formObj));
});
