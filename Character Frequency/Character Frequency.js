
// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Examples
// Input	Output
// string:
// "aaabbc"	[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// string:
// "mississippi"	[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// string:
// ""	[ ]

function characterFrequency (string) {

  var answerArray = [];
  var trackerstring = ""
  for (var i = 0; i < string.length; i ++) {
    if (trackerstring.includes(string[i]) === false) {
      trackerstring += string[i]
      var counter = 0
      for (var k = 0; k < string.length; k ++) {
      if (string[i] === string[k]) {
        counter ++
      }
      
    }
    var holderArray = [string[i], counter];
    if (!answerArray.includes(holderArray)) {
      answerArray.push(holderArray);
    }
    }
  }
  
//   answerArray = answerArray.sort(function(a, b){
//     if (a[0] < b[0]) //sort string ascending
//         return -1 
//     if (a[0] > b[0])
//         return 1
//     return 0 //default return value (no sorting)
// })
//   answerArray = answerArray.sort(function(a, b){return b[1] - a[1]});
  answerArray.sort(compareSecondColumn);

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return (a[0] > b[0]) ? 1 : -1;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}
  
  return answerArray;
}
