/**
 * 2. Count Vowels in a String
 * Description: Write a function to count the number of vowels (a, e, i, o, u) in a given string.
 * Example: countVowels("hello world"); // Output: 3
 *
 * Requirements:
 * 1. The function should be case-insensitive.
 * 2. The function should handle strings with no vowels.
 */

function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const char of string) {
    if (vowels.includes(string[char].toLowerCase())) {
      count++;
    }
  }

  return count;
}

const result = countVowels("hello world A");
console.log(result);
