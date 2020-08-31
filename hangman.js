const Hangman = function(word, guessesAllowed) {
  this.word = word;
  this.guessesAllowed = guessesAllowed;
  this.lettersArr = word.toLowerCase().split('');
  this.guessedLetters = [];

  this.status = 'playing';
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';
  this.lettersArr.forEach((letter) => {
    if (this.guessedLetters.includes(letter)) {
      puzzle += letter;
    } else if (letter === ' ') {
      puzzle += ' ';
    } else {
      puzzle += '*';
    }
  });
  return puzzle;
}

// Ways to check if the input letter is alphabet (typeof is not going to work in this case
// because '1' also type of "string")
// var isAlpha = (c) => (/[A-Za-z]/).test(c);
// character >= 'A'
Hangman.prototype.makeGuessed = function(guess) {
  guess = guess.toLowerCase();
  
  if (!(guess >= 'A')) {return} // do nothing if it's not a chracter
  if (this.guessedLetters.includes(guess)) {return} // do nothing if letter is already guessed
  if (this.lettersArr.includes(guess)) {
    this.guessedLetters.push(guess);
  } else {
    this.guessedLetters.push(guess);
    this.guessesAllowed --;
  }

  // call function that calculate the status everytime user guesses
  this.calculateStatus();



}

Hangman.prototype.calculateStatus = function() {
  let allPass = true;
  this.lettersArr.forEach((letter) => {
    if (!(this.guessedLetters.includes(letter))) {
      allPass = false;
    }
  })



  if (allPass) {
    this.status ='finished';
  } else {
    if (this.guessesAllowed === 0) {
      this.status = 'failed';
    } else {
      this.status = 'playing';
    }
  }

}


