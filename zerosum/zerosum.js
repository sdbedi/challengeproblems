

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