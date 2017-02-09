



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