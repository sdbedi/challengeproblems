
// Zero Sum
// Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

// Examples
// Input	Output
// numbers:
// [ 1, 3, 2, -3 ]	true
// numbers:
// [ 5, 7, 2, 9 ]	false

function zeroSum (numbers) {
  var answer = false
  
  if (numbers.length > 1) {
    for (var i = 0; i < numbers.length; i ++ ) {
    
      for (var j = 0; j < numbers.length; j ++ ) {
        if (i === j) {
          continue;
        }
        else if ((numbers[i] + numbers[j]) === 0) {
          return answer = true;
        }
      }
    }
  }
  return answer
}