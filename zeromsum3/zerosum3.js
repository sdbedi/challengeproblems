// Given an array of negative/positive integers, return true if there exists three numbers whose sum is zero.

// Examples
// Input	Output
// numbers:
// [ 1, 3, 2, -3 ]	true
// numbers:
// [ 0, 2, -2 ]	true
// numbers:
// [ 5, 7, 2, 9 ]	false
// numbers:
// [ 1, 1 ]	false
// numbers:
// [ 6, 9, 7, 5, 2, 4, 6, 8, 5, 5, -7, 6, 5, -7, -9, -6, -4, 7, 4, -5, -5, 4, 2, 1 ]	true



function zeroSum3 (numbers) {
  if (numbers.length < 3) return false
  for (var n=0; n < numbers.length; n++) {
    for (var p = n+1; p < numbers.length; p++) {
      for (var r = p+1; r < numbers.length; r++)
        if (numbers[n] + numbers[p] + numbers[r] === 0) return true
    }
  }
  return false
}