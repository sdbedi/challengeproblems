// Sum Array
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

// Examples
// Input	Output
// array:
// [ 1, 2, 3 ]	6
// array:
// [ 4, -1, 5 ]	8
// array:
// [ 10, -11, 11 ]	11
// array:
// [ 1, 2, 3, -6, 4, 5, 6 ]	15

function sumArray (array) {
  var currentSum = array[0];
  var largestSum = array[0];
    for (var i=1; i<array.length; i++) {
      currentSum = Math.max((currentSum+array[i]), array[i]);
      largestSum = Math.max(currentSum, largestSum);
    }
  return largestSum;
}