function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesPlace = document.querySelector('#boxes');
const input = document.querySelector('input');

const createBoxes = amount => {
	let markup = '';
	let boxWidth = 30;
	let boxHeight = 30;

	for (let i = 1; i <= amount; i++) {
		markup += `<div style="width: ${boxWidth}px; height: ${boxHeight}px; 
		background-color:${getRandomHexColor()};"></div> `
		boxWidth += 10;
		boxHeight += 10;
	}
	boxesPlace.innerHTML = markup;
}

const destroyBoxes = () => {
    boxesPlace.innerHTML = '';
}

const onCreatebtnClick = () => {
	if (input.value <= 100 && input.value >= 1) {
		createBoxes(input.value);
	} 
	input.value = '';
}

const onDestroybtnClick = () => {
	destroyBoxes();
}

createBtn.addEventListener('click', onCreatebtnClick);
destroyBtn.addEventListener('click', onDestroybtnClick);