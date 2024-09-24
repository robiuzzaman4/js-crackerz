// Find the First Non-Repeating Character
// Write a function to find the first character in a string that does not repeat.
function firstNonRepeatingCharacter(str) {
  let nonRepeatedArray = [];
  const characters = str.split("");

  for (let i = 0; i < characters.length; i++) {

    const char = characters[i];
    
    if (!nonRepeatedArray.includes(char)) {
      nonRepeatedArray.push(char);
    } else {
      const index = nonRepeatedArray.indexOf(char);
      nonRepeatedArray.splice(index, 1);
    }
  }

  return nonRepeatedArray?.length > 0 ? nonRepeatedArray[0] : null;
}
// Test cases
console.log(firstNonRepeatingCharacter("aabccde")); // "b"
console.log(firstNonRepeatingCharacter("aabb")); // null (no non-repeating character)
