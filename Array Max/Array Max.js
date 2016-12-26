// Array Max
// Given an array of negative/positive integers, find the largest element. DO NOT use Math.max

// Examples
// Input	Output
// numbers:
// [ 20, 30, 10 ]	30
// numbers:
// [ 5 ]	5

function max (numbers) {
  var x = numbers[0]
  for (var i =1; i < numbers.length; i ++ ) {
    if (numbers[i] > x ) {
      x = numbers[i]
    }
  }
  return x

}
