// Character Sum
// Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.

// Examples
// Input	Output
// str:
// "123"	6
// str:
// "0101"	2
// str:
// "so cool!!1!"	1


function charSum (str) {
  let sum = 0
  for (var i = 0; i < str.length; i ++) {
    if ((str[i] * 1) + 2) {
      sum += (str[i] / 1)
    }
  }
  return sum
}
