function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeBtn = document.querySelector('.change-color');
const spanColorName = document.querySelector('.color');


const onChangebtnClick = () => {
	body.style.backgroundColor = getRandomHexColor();
	spanColorName.textContent = body.style.backgroundColor;
}

changeBtn.addEventListener('click', onChangebtnClick)



