//We have a coin. We flip it N times. For a given array of length N, with each index representing heads or tails (heads = 0, tails = 1).


var testArray = [1,1,1,1,1,1,0,0,1]
// var headCount = 0
// var tailCount = 0
// for (var i = 0; i < myArray.length; i ++) {
//   if (myArray[i] === 0) { headCount ++}
//   if (myArray[i] === 1) { tailCount ++}
//   console.log("i, myArray[i]", i, myArray[i])
  
// }
// console.log(headCount, tailCount)
// console.log("hi", i, myArray[i])
// if (headCount > tailCount) {console.log(tailCount)}
// if (headCount < tailCount) {console.log(headCount)}

function solution (A) {
  var myArray = A
  var headCount = 0
  var tailCount = 0
  for (var i = 0; i < myArray.length; i ++) {
   if (myArray[i] === 0) { headCount ++}
   if (myArray[i] === 1) { tailCount ++}
   console.log("i, myArray[i]", i, myArray[i])
  
  }
  console.log(headCount, tailCount)
  console.log("hi", i, myArray[i])
  if (headCount > tailCount) {console.log(tailCount)}
  if (headCount < tailCount) {console.log(headCount)}
}

solution(testArray)