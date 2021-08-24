'use strict';

// Selecting elements
// selects the background to shift color
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// selects the store
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// selects the current player
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// specifying numbers not strings, but JS will automatically convert to strings to display on page
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display the dice
  diceEl.classList.remove('hidden');
  // dynamically load one of the images depending on the randomly rolled dice.
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for a rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    // select score element dynamically based on who the active player is now.
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    // if active player is 0, then switch to player 1. If not, switch to player 0.
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    // toggle will add the class if not there, if it is there, it'll remove it.
    // toggling both at the same time will make sure it's only on one element at once.
    // toggles back and forth between active player background - shifts color on the page
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
