// Check if a String Contains Only Digits
// Write a function to check if a string contains only numeric digits.

function isNumeric(str) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const chars = str.split("");

  for (const char of chars) {
    if (letters.includes(char)) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isNumeric("12345")); // true
console.log(isNumeric("12a45")); // false
