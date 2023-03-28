/* global variables */
const guessedLettersElement= document.querySelector(".guessed-letters");
const guessButton= document.querySelector(".guess");
const letterInput= document.querySelector(".letter");
const wordInProgress= document.querySelector(".word-in-progress");
const remainingGuesses= document.querySelector(".remaining");
const remainingGuessesSpan=document.querySelector("span");
const message= document.querySelector(".message");
const playAgainButton= document.querySelector(".play-again hide");

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

guessButton.addEventListener=("click", function(e){
    e.preventDefault();
    //empty message element
    message.innerText= "";
    const guess= letterInput.value;
    const goodGuess = validateInput(guess);
});

/* Create a Function to Check Player’s Input*/

const validateInput= function(input){
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText= "Please enter a letter";
    } else if (input.length >1 ){
        message.innerText= "Please only enter one letter at a time!!"
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
    }
}
