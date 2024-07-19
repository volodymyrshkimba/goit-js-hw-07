const inputEl = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const onInputElInput = (event) => {

	span.textContent = event.currentTarget.value.trim();

   if (event.currentTarget.value.trim() === '') {
		span.textContent = "Anonymous";
	}

}

inputEl.addEventListener('input', onInputElInput);



