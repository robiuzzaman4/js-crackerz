// Check if a String Contains Only Letters
// Write a function to check if a string contains only alphabetical characters.

function isAlphabetic(str) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const chars = str.split("");

  for (const char of chars) {
    if (numbers.includes(char)) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isAlphabetic("hello")); // true
console.log(isAlphabetic("hello123")); // false
