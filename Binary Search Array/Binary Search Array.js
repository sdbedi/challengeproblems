// Binary Search Array
// Given a sorted array of integers, find the index of a target value using a binary search algorithm.

// A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.


// Note:
Your function should return -1 for target values not in the array. 

function binarySearch (array, target) {
  // Write your code here, and
  // return your final answer.
    var lo = 0,
        hi = array.length - 1,
        mid,
        element;
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2, 10);
        element = array[mid];
        if (element < target) {
            lo = mid + 1;
        } else if (element > target) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}