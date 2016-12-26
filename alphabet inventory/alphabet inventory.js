// Given an alphet and a string of text, write a method that tallies the count of each letter
//  defined in said alphabet (case insensitive), then return the result of this tally.

// Examples
// Input	Output
// alphabet:
// "aBc"
// text:
// "aabbccdd"	"a:2,b:2,c:2"

// alphabet:
// "x"
// text:
// "Racer X is my friend :)"	"x:1"

// alphabet:
// "123"
// text:
// "o hai"	"no matches"

function alphaCount (alphabet, text) {

   var finalString = '';
   var trackerstring= '';
   
   for (var i = 0; i < alphabet.length; i++) {
       var counter = 0;    //set counter here so it resets when we've gone through 
       for (var j = 0; j < text.length; j++) {
             if (alphabet[i].toLowerCase() === text[j].toLowerCase()) {
                 counter++;
             }
       }
       if (counter > 0) {
       finalString = finalString + alphabet[i].toLowerCase() + ':' + counter + ','
       }
     }
   if (finalString.length === 0) {
     finalString = "no matches"
   } else {
    finalString = finalString.slice(0, -1);
   }
    return finalString;
}