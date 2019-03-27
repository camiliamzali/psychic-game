// Define all variables
// Create alphabet array
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(' ');
var guessesSoFarHTML = document.getElementById('guessesSoFarHTML');
var guessesLeftHTML = document.getElementById('guessesLeftHTML');
var winsHTML = document.getElementById('winsHTML');
var lossesHTML = document.getElementById('lossesHTML');
// Pick random number
var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessArray = [];


// New Game function
function newGame(event) {
  guessArray.length = 0;
  letterHTML.textContent = [];
  guessesSoFarHTML.textContent = [];
  guessesLeftHTML.textContent = "10";
  computerLetter;
}
console.log(computerLetter);
// Computer functions
document.onkeyup = function (event) {
  // Record user's picked key
  var userGuess = event.key;
  // Push these into an <array></array>

  guessArray.push(userGuess);
  guessesSoFarHTML.textContent = `${guessArray}`

  if (userGuess === computerLetter) {
    var wins = parseInt(winsHTML.textContent) + 1;
    winsHTML.textContent = wins;
    alert("You won!");
  };
  if (userGuess !== computerLetter) {
    var guessesLeft = parseInt(guessesLeftHTML.textContent) - 1;
    guessesLeftHTML.textContent = guessesLeft;
  }
}




// if (userGuess === computerLetter) {
//   var wins = parseInt(winsHTML.textContent) + 1;
//   winsHTML.textContent = wins;
// };

// if (userGuess !== computerLetter) {
//   var guessesLeft = parseInt(guessesLeftHTML.textContent) - 1;
//   var losses = parseInt(lossesHTML.textContent) + 1;
//   lossesHTML.textContent = losses;
//   guessesLeftHTML.textContent = guessesLeft;
// }
// if (parseInt(guessesLeftHTML.textContent) === 0) {
//   newGame();
// }