'use strict';

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');
const formElement = document.querySelector('form');

let tries = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${randomNumber}`);

function chooseANumber() {
  const selectedNumber = parseInt(input.value);
  if (selectedNumber < 1 || selectedNumber > 100) {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (selectedNumber === randomNumber) {
    clue.innerHTML = 'Has ganado campeona!!!';
  } else if (selectedNumber < randomNumber) {
    clue.innerHTML = 'Pista: Demasiado bajo';
  } else if (selectedNumber > randomNumber) {
    clue.innerHTML = 'Pista: Demasiado alto';
  }
}

const counterTries = () => {
  tries++;
  counter.innerHTML = `Número de intentos: ${tries}`;
};

function handleClickButton() {
  chooseANumber();
  counterTries();
}

button.addEventListener('click', handleClickButton);

formElement.addEventListener('submit', (ev) => ev.preventDefault());
