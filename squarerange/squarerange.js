//For a given rangem A through B (inclusive), find how many numbers are perfect squares, ie:
//4 -16: 3
//5 -16: 2

//Simple, iterative solution:

function simpleSolution(A, B) {
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

//Better, more efficient way. Interate from square root of a to square root of b inclusive:
// floor(sqrt(b)) - ceil(sqrt(a)) + 1

// We take floor of sqrt(b) because we need to consider 
// numbers before b.

// We take ceil of sqrt(a) because we need to consider 
// numbers after a.


// For example, let b = 24, a = 8.  floor(sqrt(b)) = 4, 
// ceil(sqrt(a)) = 3.  And number of squares is 4 - 3 + 1
// = 2. The two numbers are 9 and 16.

function solution(A, B) {
  return (Math.floor(Math.sqrt(B)) - Math.ceil(Math.sqrt(A)) + 1)
}
