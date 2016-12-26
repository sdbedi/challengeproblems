// Array Middle
// Given an array of negative/positive integers, return the element in the center position of the array.

// If the array has an even number of elements, return the average of the two middle elements instead.

// Examples
// Input	Output
// numbers:
// [ 200, 5, 100 ]	5
// numbers:
// [ 10, 20, 30, 40 ]	25


function middle (numbers) {
  // Write your code here, and
  // return your final answer.
  var length = numbers.length
  if (length % 2 === 0) {
    var x = length /2
    var y = x - 1
    return (numbers[x] + numbers[y]) /2
    
  }
  else {
    var q = ((length - 1) / 2)
    return numbers[q]
  }

}
