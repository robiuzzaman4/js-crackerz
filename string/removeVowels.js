// Remove Vowels from a String
// Write a function to remove all vowels from a string.

function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const chars = str.split("");

  const result = chars.filter((char) => !vowels.includes(char));
  return result.join("");
}

// Test cases
console.log(removeVowels("hello world")); // "hll wrld"
console.log(removeVowels("javascript")); // "jvscrpt"
