const form = document.querySelector('.login-form');

const formSubmit = (event) => {
	event.preventDefault();

	const email = event.target.elements.email.value;
	const password = event.target.elements.password.value;
	const userRegistered = {};


	if (email === '' || password.trim() === '') {
	   alert('All form fields must be filled in');
	} else {
		userRegistered.email = email.trim();
		userRegistered.password = password.trim();
		console.log(userRegistered);
		form.reset();
	}

}

form.addEventListener('submit', formSubmit);