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
console.log(firstNonRepeatingCharacter("aabccde")); // "b"
console.log(firstNonRepeatingCharacter("aabb")); // null (no non-repeating character)
