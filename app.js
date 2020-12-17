
// import functions and grab DOM elements
import compareNumbers from './numbers.js';

const submitButton = document.getElementById('submit-button');
const triesLeft = document.getElementById('tries');
const guessRange = document.getElementById('high-or-low');
const winLose = document.getElementById('win-or-lose');
const resetButton = document.getElementById('reset-button');
const correctNumber = Math.ceil(Math.random() * 20);

// initialize state
let guessesLeft = 4;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    const myInput = Number(document.getElementById('input').value);
    const userGuess = compareNumbers(myInput, correctNumber);
    guessesLeft--;
    triesLeft.textContent = guessesLeft + ' guesses left';
  
    if (userGuess === 0) {
      guessRange.textContent = 'Winner!!';
      winLose.textContent = 'Well done!!';
      submitButton.disabled = true;
    } else if (userGuess === -1) {
      guessRange.textContent = 'Your guess is too low.';
    } else if (userGuess === 1) {
      guessRange.textContent = 'Your guess is too high.';
    } if (guessesLeft === 0) {
      winLose.textContent = 'Wow you\'re not very good at this.';
      submitButton.disabled = true;
    }
  });

  resetButton.addEventListener('click', () => {
    guessesLeft = 4;
    winLose.textContent = '';
    guessRange.textContent = '';
    triesLeft.textContent = guessesLeft + ' guesses left';
    submitButton.disabled = false;
    document.getElementById('input').value = '';
  });
