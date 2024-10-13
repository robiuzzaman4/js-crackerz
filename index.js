// ========== 01 ==========

// Find the First Non-Repeating Character
// Write a function to find the first character in a string that does not repeat.

function firstNonRepeatingCharacter(string) {
  const nonRepeatedArray = [];

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (!nonRepeatedArray.includes(element)) {
      nonRepeatedArray.push(element);
    } else {
      const index = nonRepeatedArray.indexOf(element);
      nonRepeatedArray.splice(index, 1);
    }
  }

  return nonRepeatedArray;
}

// Test cases
// console.log(firstNonRepeatingCharacter("aabccde")); // "b"
// console.log(firstNonRepeatingCharacter("aabb")); // null (no non-repeating character)

// ========== 02 ==========
/**
 * 3. Capitalize the First Character of Each Word
 * Description: Write a function that capitalizes the first character of each word in a string.
 * Example: capitalizeWords("hello world"); // Output: "Hello World"
 *
 * Requirements:
 * 1. The function should handle multiple spaces between words.
 * 2. The function should handle empty strings.
 */
function capitalizeWords(string) {
  if (string.length === 0) {
    return "enter a valid string";
  }

  const trimed = string.replace(/\s+/g, " ");
  const splited = trimed.split(" ");

  const capitalized = splited.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalized.join(" ");
}

// console.log(capitalizeWords("ruhan    zaman"));
