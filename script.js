'use-strict'

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brown",
  "gray",
  "black",
  "white"
];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');
const backgroundColorText = document.querySelector('h2');
const simpleButton = document.querySelector('.simple');
const hexButton = document.querySelector('.hex');

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomHexColor() {
  let result = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    result += hex[randomIndex];
  }
  return result;
}

function changeBackgroundColorText() {
  document.body.style.backgroundColor = 'white';
  color.textContent = 'white'
}

function changeBackgroundColor(colorValue) {
  document.body.style.backgroundColor = colorValue;
  color.textContent = colorValue;
}

simpleButton.addEventListener('click', () => {
  changeBackgroundColorText();
  button.addEventListener('click', function () {
    const randomColors = getRandomColor();
    changeBackgroundColor(randomColors);
  })
});

hexButton.addEventListener('click', () => {
  changeBackgroundColorText();
  button.addEventListener('click', function () {
    const result = getRandomHexColor();
    changeBackgroundColor(result);
  })
});