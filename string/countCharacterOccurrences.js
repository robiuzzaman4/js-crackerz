// Count Occurrences of a Character
// Write a function to count how many times a specific character appears in a string.

function countCharacterOccurrences(str, char) {
  let charCount = 0;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter === char) {
      charCount++;
    }
  }

  return charCount;
}

// Test cases
console.log(countCharacterOccurrences("hello", "l")); // 2
console.log(countCharacterOccurrences("mississippi", "s")); // 4
