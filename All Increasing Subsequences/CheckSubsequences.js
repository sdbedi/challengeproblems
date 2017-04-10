var testArray = [188930, 194123, 201345, 154243, 154243]
var windowLength = 3 

for (var i = 0; i <= testArray.length - windowLength; i ++) { //each iteration of this loop represents a different window
  console.log(testArray[i])
  console.log("this is the slice:  ", testArray.slice(i, i + windowLength))
  //checkSubSequences(testArray.slice(i, i + windowLength))
   var windowTotal = 0; //the 'score' for that particular window
  checkSubSequences(testArray.slice(i, i + windowLength)) 
  function checkSubSequences(sequence){
      for (var rangeSize = sequence.length; rangeSize > 1; rangeSize--) {
        var numberOfSubranges = sequence.length - rangeSize + 1;
       
        for (var subrange = 0; subrange < numberOfSubranges; subrange++){
          var subrangeSlice = sequence.slice(subrange, subrange + rangeSize);
          // if (this.isNonDecreasing(subrangeSlice)){ score++; }
          // if (this.isNonIncreasing(subrangeSlice)){ score--; }
          console.log("subrangeSlice: ", subrangeSlice)
          isIncreasing(subrangeSlice)
          isDecreasing(subrangeSlice)
        }
      }
      //return score;
    }
    //checkSubSequences([188930, 194123, 201345])
    console.log("windowTotal: ", windowTotal)
}

function isIncreasing (inputArray) {
  for (var a = 0; a < inputArray.length; a ++) {
    if (inputArray[a] >= inputArray[a+1]) {
        return false;
    }
  }
  windowTotal ++
  return true
}

function isDecreasing (inputArray) {
  for (var d = 0; d < inputArray.length; d ++) {
    if (inputArray[d] <= inputArray[d+1]) {
        return false;
    }
  }
  windowTotal --
  return true
}
//checkSubSequences([188930, 194123, 201345])