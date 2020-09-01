class Hangman {
  constructor(word, guessesAllowed) {
    this.word = word;
    this.guessesAllowed = guessesAllowed;
    this.lettersArr = word.toLowerCase().split('');
    this.guessedLetters = [];
    this.status = 'playing';
  }
  
  getPuzzle() {
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

  makeGuessed(guess) {
    guess = guess.toLowerCase();
    if (this.status === 'playing') {
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
  }

  createStatusMessage(){
    if (this.status === 'playing') {
      return `Guesses left: ${this.guessesAllowed}`;
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${this.word}".`;
    } else {
      return 'Great work! you guessed the word.';
    }
  
  }

  calculateStatus() {
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

  
}



