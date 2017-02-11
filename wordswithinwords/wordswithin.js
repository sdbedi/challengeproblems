
// Words within Words
// Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

// Examples
// Input	Output
// wordList:
// [ "gray", "grays", "ray", "rays", "strays" ]	"grays"

function nestedWordCount (wordList) {
  var currentWinner = '';
  var currentWinnerCount = 0;
  for (var i = 0; i < wordList.length; i++) {
    var thisCount = 0;
    for (var k = 0; k < wordList.length; k++) {
      if (wordList[i].includes(wordList[k])) {
        thisCount++;
      }
    }
    if (thisCount > currentWinnerCount) {
      currentWinner = wordList[i];
      currentWinnerCount = thisCount;
    }
  }

  return currentWinner;
}