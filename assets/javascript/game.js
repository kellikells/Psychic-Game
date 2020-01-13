// document.ready = function () {

// VARIABLES
// ----------------------------------
// starting game stats 
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessesSoFar = [" "];


// array of possible computer choices
const computerKeyChoices = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numberOfKeys = computerKeyChoices.length;
console.log(numberOfKeys);


let x;

// FUNCTIONS
// ----------------------------------------------

function randomAnswer() {

    let i = Math.floor(Math.random() * numberOfKeys);
    
    x = computerKeyChoices[i];
    console.log("winning number " +x);
}


console.log(wins);
console.log(losses);
console.log(guessesLeft);
console.log(guessesSoFar);



// function to update stats: 
// function updateStats() {

//     document.querySelector("#wins").innerHTML =   wins;
//     document.querySelector("#losses").innerHTML =  losses;

//     document.querySelector("#guesses-left").innerHTML =  guessesLeft;

//     document.querySelector("#guesses-so-far").innerHTML =  guessesSoFar;
// }


// // STARTING THE GAME ---- CALLING THE FUNCTIONS
// // ---------------------------------------
randomAnswer();
// updateStats();





// what happens when user presses a key 
document.onkeyup = function (justAnything) {
    // grabbing the key that was pressed during the keyPress

    let userGuess = justAnything.key;
    // userGuess = userGuess.toLowerCase;




    console.log(userGuess);

    guessesLeft--;
    console.log(guessesLeft);

    if (userGuess === x && guessesLeft >= 0) {
        wins++;

        guessesLeft = 9;
        // updateStats();
        guessesSoFar = [];
        console.log("I won " + wins );
        randomAnswer();

    }
    else if (userGuess !== x && guessesLeft > 0) {
        guessesSoFar.push(userGuess);
        console.log("wrong answer");
        // updateStats();
    }

    else {
        losses++;
        console.log("i lost " + losses);
        guessesSoFar = [];
        guessesLeft = 9;
        randomAnswer();

    }
}

