// Challenge #1


// As Amne expands, we will want to understand large-scale patterns in home values.

// As we look at patterns across windows of certain sizes, we will need to efficiently track trends such as increasing and decreasing subranges.

// For this problem, you are given N days of average home sale price data, and a fixed window size K . For each window of K days, from left to right, find the number of increasing subranges within the window minus the number of decreasing subranges within the window.

// A window of days is defined as a contiguous range of days. Thus, there are exactly N-K+1 windows where this metric needs to be computed. An increasing subrange is defined as a contiguous range of indices [a,b], a < b , where each element is larger than the previous element. A decreasing subrange is similarly defined, except each element is smaller than the next.

// Constraints

// 1 ≤ N ≤ 200,000 days
// 1 ≤ K ≤ N days
// Input Format

// Your solution should accept an input file (input.txt) with the following contents: 

//  Line 1: Two integers, N and K.
//  Line 2: N positive integers of average home sale price, each less than 1,000,000.

// Output Format

// Your solution should output one integer for each window’s result, with each integer on a separate line, to an output file or to the console.

// Sample Input

// 5 3
// 188930 194123 201345 154243 154243

// Sample Output

// 3
// 0
// -1

// Explanation

// For the first window of [188930, 194123, 201345], there are 3 increasing subranges ([188930, 194123, 201345], [188930, 194123], and [194123, 201345]) and 0 decreasing, so the answer is 3. For the second window of [194123, 201345, 154243], there is 1 increasing subrange and 1 decreasing, so the answer is 0. For the third window of [201345, 154243, 154243], there is 1 decreasing subrange and 0 increasing, so the answer is -1.

var testArray = [0, 1, 2, 3, 4, 3, 2]


function subSequence (sequenceArray, windowLength) {
	var total = 0
	for (var i = 0; i < sequenceArray.length; i ++) {
	  var k = windowLength
	  if (k + i > sequenceArray.length) {
	    k = sequenceArray.length - i
	  }
	  while (k > 1) {
	    console.log(isIncreasing(sequenceArray.slice(i, i + k)))
	    console.log(isDecreasing(sequenceArray.slice(i, i + k)))
	    console.log("total: ", total)
	    k--
	  }
	}

	function isIncreasing (inputArray) {
	  for (var q = 0; q < inputArray.length; q ++) {
	    if (inputArray[q] >= inputArray[q+1]) {
	        return false;
	    }
	  }
	  total ++
	  return true
	}

	function isDecreasing (inputArray) {
	  for (var r = 0; r < inputArray.length; r ++) {
	    if (inputArray[r] <= inputArray[r+1]) {
	        return false;
	    }
	  }
	  total --
	  return true
	}
	console.log("final total: ", total)
	return total
}

subSequence(testArray, 3)