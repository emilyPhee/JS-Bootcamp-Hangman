const game1 = new Hangman('Cat', 2);

const puzzleEl = document.querySelector('.guessed-puzzle');
const guessesEl = document.querySelector('.remaining-guesses');

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.createStatusMessage();

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);

  game1.makeGuessed(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.createStatusMessage();

  game1.calculateStatus();

});