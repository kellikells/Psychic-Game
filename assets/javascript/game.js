

// once the <body> loads, it runs this function
function pageElementsFirst() {

// variables for game stats
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessesSoFar = [];

// connect to HTML so stats are viewable
let winsText = document.getElementById("wins");
console.log(winsText);
let lossesText = document.getElementById("losses");
let guessesLeftText = document.getElementById("guesses-left");
let guessesSoFarText = document.getElementById("guesses-so-far");
console.log("hopefully this array displays ok" + guessesSoFarText);

// possible computer choices
const computerKeyChoices = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// computer key choice stored in this variable
let answer;

// ---------------FUNCTION------
//function to generate random computer choice in var, answer
function generateAnswer() {
    answer = computerKeyChoices[Math.floor(Math.random() * computerKeyChoices.length)];
};

generateAnswer();
        console.log("winning letter " + answer);
// --------------Game starts once user presses a key-------------
document.onkeyup = function(event) {

    // when key is pressed, stored this value in var, userGuess   
    let userGuess = event.key;
    console.log(userGuess);

    // checking the key pressed is a letter key
    if ((event.keyCode >= 65) && (event.keyCode <= 90)) {
   



        // user wins 
        if ((userGuess === answer) && (guessesLeft >= 0)) {
            wins++;
            console.log("i win " + wins);
            guessesLeft = 9;
            guessesSoFar = [];
            console.log("should only contain this text" + guessesSoFar);
            generateAnswer();


        }

        // user wrong 
        else if ((userGuess !== answer) && (guessesLeft > 1)) {
            guessesLeft--;
            console.log("how many guesses I have left " + guessesLeft);
            guessesSoFar.push(userGuess);
            console.log(guessesSoFar);
        }

        // user loses
        else {
            losses++;
            guessesLeft = 9;
            guessesSoFar = [];
            console.log("how many times i lost" + losses);
            generateAnswer();
        }
    }

}

  // html display
  if (winsText) {
      winsText.textContent = "Wins: " + wins;
  }
  if (lossesText) {
      lossesText.textContent = "Losses: " + losses;
  }
  if (guessesLeftText) {
      guessesLeftText.textContent = "Guesses left: " + guessesLeft;
  }
  if (guessesSoFarText) {
      guessesSoFarText.textContent = "Guesses So far: " + guessesSoFar;
  }
//   winsText.textContent = "Wins: " + wins;
//   lossesText.textContent = "Losses: " + losses;
//   guessesLeftText.textContent = "Guesses left: " + guessesLeft;
//   guessesSoFarText.textContent = "Guesses So far: " + guessesSoFarText;
}