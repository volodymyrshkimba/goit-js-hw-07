function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.children[0].lastElementChild;

body.style.backgroundColor = 'teal';

console.log(body);


