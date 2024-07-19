const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
	event.preventDefault();

	const email = event.target.elements.email.value;
	const password = event.target.elements.password.value;
	


	if (email === '' || password.trim() === '') {
	   alert('All form fields must be filled in');
	} else {
		const userRegistered = {
			email,
			password,
		};
		
		console.log(userRegistered);
		form.reset();
	}

}

form.addEventListener('submit', onFormSubmit);