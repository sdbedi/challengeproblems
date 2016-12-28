// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

// Examples
// Input	Output
// string:
// "aibohphobia"	"aibohphobia"
// string:
// "My dad is a racecar athlete"	"a racecar a"


function longestPalindrome (myString) {
  // Write your code here, and
  // return your final answer.
  let count = myString.length
  while (count > 1) {
  for (var i =0; i + count < myString.length; i++) {
    let q = myString.substr(i, count + 1)
    if (q === q.split("").reverse().join("")) {
      answer = q
      return answer
    }
  }
  
  count --
  }
}
