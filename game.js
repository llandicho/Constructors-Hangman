//Random word is selected and exported
var wordsToGuess = ["Wonder Woman", "The Matrix", "The Game", "Inception", "Black Mirror", "Schindler List", "Star Wars"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;