/* global variables */
const guessedLettersElement= document.querySelector(".guessed-letters");
const guessLetterButton= document.querySelector(".guess");
const letterInput= document.querySelector(".letter");
const wordInProgress= document.querySelector(".word-in-progress");
const remainingGuessesElement= document.querySelector(".remaining");
const remainingGuessesSpan=document.querySelector(".remaining span");
const message= document.querySelector(".message");
const playAgainButton= document.querySelector(".play-again");

const word= "magnolia";
const guessedLetters= [];

// Display our symbols as placeholders for the chosen word's letters

const placeholder= function (word){
    const placeholderLetters= [];
    for(const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText= placeholderLetters.join("");
};

placeholder(word);

// Add event listener for the button 

guessLetterButton.addEventListener("click", function(e){
    e.preventDefault();
    //empty message element
    message.innerText= "";
    const guess= letterInput.value;
    const goodGuess = validateInput(guess);

    if (goodGuess) {
     makeGuess(guess);
    }
    letterInput.value="";
});

/* Create a Function to Check Player’s Input*/

const validateInput= function(input){
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText= "Please enter a letter";
    } else if (input.length >1 ){
        message.innerText= "Please enter a single letter!!"
    } else if (!input.match(acceptedLetter)){
        message.innerText= "Letters only, people"
    } else {
        return input;
    }
};

const makeGuess= function(guess) {
    guess= guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText= "Try another letter, you already entered that one!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
}

const showGuessedLetters= function() {
    guessedLettersElement.innerHTML= "";
for (const letter of guessedLetters) {
    const li= document.createElement("li"); 
    li.innerText= letter;
    guessedLettersElement.append(li);
    }   
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
      if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
      } else {
        revealWord.push("●");
      }
    }
    // console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
  };
  
  const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
      message.classList.add("win");
      message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
  };

