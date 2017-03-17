//For a given rangem A through B (inclusive), find how many numbers are perfect squares, ie:
//4 -16: 3
//5 -16: 2

//Simple, iterative solution:

function solution(A, B) {
    var isSquare = function (n) {
      return n > 0 && Math.sqrt(n) % 1 === 0;
    };
    var counter = 0 
    for (var i = A; i < B + 1; i ++) {
      var test = isSquare(i)
      if (test === true) {counter ++}
    }
    console.log(counter)
}