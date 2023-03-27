/* global variables */
const guessedLetters= document.querySelector(".guessed-letters");
const guessButton= document.querySelector(".guess");
const letterInput= document.querySelector(".letter");
const wordInProgress= document.querySelector(".word-in-progress");
const remainingGuesses= document.querySelector(".remaining");
const remainingGuessesSpan=document.querySelector("span");
const message= document.querySelector(".message");
const playAgainButton= document.querySelector(".play-again hide");

const word= "magnolia";

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
    const letterGuessed= letterInput.value;
    console.log(letterGuessed);
    letterInput.value="";
});

