

const game1 = new Hangman('Cat', 2);



// Guess c, t, z
console.log(game1.getPuzzle()); // c*t
console.log(game1.guessesAllowed);


const puzzleEl = document.querySelector('.guessed-puzzle');
const guessesEl = document.querySelector('.remaining-guesses');

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = `you have ${game1.guessesAllowed} guesse(s) left`;

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);


  // // Display the puzzle to the browser
  // document.querySelector('.guessed-puzzle').innerHTML = game1.getPuzzle();
  // // Display the guesses left to the browser 
  // document.querySelector('.remaining-guesses').innerHTML = `you have ${game1.guessesAllowed} guesse(s) left`;
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = `you have ${game1.guessesAllowed} guesse(s) left`;

  // game1.calculateStatus();

});