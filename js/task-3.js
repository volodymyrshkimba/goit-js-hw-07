const input = document.querySelector('#name-input');
console.log(input);
const span = document.querySelector('#name-output')

const getSetInputText = (event) => {
	span.textContent = event.currentTarget.value.trim();

	if (event.currentTarget.value === '') {
		span.textContent = "Anonymous";
	}
}

input.addEventListener('input', getSetInputText);

