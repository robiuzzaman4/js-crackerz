// Find the First Repeating Character

// Write a function to find the first character that repeats in a string.

function firstRepeatingCharacter(str) {
  const seenChar = {};

  for (const char of str) {
    if (seenChar[char]) {
      return char;
    }

    seenChar[char] = true;
  }

  return null;
}

// Test cases
console.log(firstRepeatingCharacter("hello")); // "l"
console.log(firstRepeatingCharacter("abcdefg")); // null (no repeating character)
